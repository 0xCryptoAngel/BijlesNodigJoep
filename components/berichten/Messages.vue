<template>
  <div>
    <div class="relative mb-8 overflow-hidden">
      <div class="grid grid-cols-2 gap-0">
        <div class="col-auto discussions">
          <div class="discussion search">
            <div class="searchbar">
              <i class="fa fa-search" aria-hidden="true"></i>
              <input
                v-model="searchString"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
          <div v-if="allUserList.length > 0">
            <div
              v-for="message in allUserList"
              :id="message.id"
              :key="message.id"
              class=""
              @click="
                getUserWiseMessage(message.id, message.attributes.first_name)
              "
            >
              <div
                v-if="message.attributes.first_name"
                class="discussion"
                :class="{ message_active: active_el == message.id }"
              >
                <div
                  class="photo"
                  style="
                    background-image: url(https://image.noelshack.com/fichiers/2017/38/2/1505775062-1505606859-portrait-1961529-960-720.jpg);
                  "
                >
                  <div class="online"></div>
                </div>
                <div class="desc-contact">
                  <p class="name">
                    {{ message.attributes.first_name }}
                    {{ message.attributes.last_name }}
                  </p>
                  <!-- <p class="message">9 pm at the bar if possible 😳</p> -->
                </div>
                <div class="timer">
                  {{ message.attributes.last_seen | cdate }}
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="discussion animate-pulse">
              <div class="photo">
                <div class="online"></div>
              </div>
              <div class="desc-contact">
                <p class="name"></p>
                <!-- <p class="message">9 pm at the bar if possible 😳</p> -->
              </div>
              <div class="timer"></div>
            </div>
          </div>
        </div>
        <div class="col-auto chat overflow-auto">
          <div v-if="newMesage.length > 0">
            <div class="header-chat">
              <i class="icon fa fa-user-o" aria-hidden="true"></i>
              <p class="name">{{ user_name }}</p>
            </div>
            <div class="messages-chat overflow-auto">
              <div
                v-for="chat in newMesage"
                :id="chat.id"
                :key="chat.id"
                class="message text-only"
              >
                <div class="response">
                  <p class="text">
                    {{ chat.attributes.content }}
                  </p>
                  <p class="response-time time">
                    {{ chat.attributes.created_at | cdate }}
                  </p>
                </div>
              </div>
            </div>
            <div class="footer-chat">
              <i
                class="icon fa fa-smile-o clickable"
                style="font-size: 25pt"
                aria-hidden="true"
              ></i>
              <input
                type="text"
                class="write-message"
                placeholder="Type your message here"
              />
              <i
                class="icon send fa fa-paper-plane-o clickable"
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div v-else class="text-center my-48">
            <h1>Welcome {{ fullName }}</h1>
          </div>
          <!-- <div
            class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"
          >
            <div class="animate-pulse flex space-x-4">
              <div class="rounded-full bg-blue-400 h-12 w-12"></div>
              <div class="flex-1 space-y-4 py-1">
                <div class="h-4 bg-blue-400 rounded w-3/4"></div>
                <div class="space-y-2">
                  <div class="h-4 bg-blue-400 rounded"></div>
                  <div class="h-4 bg-blue-400 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <!-- <div
      id="journal-scroll"
      class="px-1 py-1 overflow-auto"
      style="height: 19rem"
    >
      <div v-if="allMessages">
        <div
          v-for="message in allMessages"
          :id="message.id"
          :key="message.id"
          class=""
        >
          {{ message.attributes }}
        </div>
      </div>
      <div v-else>Data not found</div>
    </div> -->
  </div>
  <!-- <div class="flex justify-end pt-2 pl-10">
    <span
        class="flex items-end justify-end h-auto p-1 px-1 text-xs font-normal text-gray-200 bg-green-900 rounded-sm"
        >Lets jump on a video call.
        <span class="pl-1 text-gray-400" style="font-size: 8px"
        >02.30am</span
        ></span
    >
    </div> -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
// import Msg from '~/components/berichten/Messages'
/* import 'moment/locale/pt-br' */
export default {
  filters: {
    cdate(datass) {
      if (!datass) return ''
      return moment(datass).fromNow()
    },
  },
  data() {
    return {
      newMesage: [],
      active_el: 0,
      user_name: '',
      allUserName: this.$store.state.userList,
      search: '',
      searchString: '',
    }
  },
  computed: {
    ...mapGetters(['allMessages', 'allUserList', 'loggedInUser']),
    allUserList() {
      let searchArray
      searchArray = this.$store.state.userList
      let searchString
      searchString = this.searchString
      if (!searchString) {
        return searchArray
      }

      searchString = searchString.trim().toLowerCase()

      searchArray = searchArray.filter((item) => {
        if (item.attributes.first_name) {
          if (
            item.attributes.first_name.toLowerCase().includes(searchString) ||
            item.attributes.last_name.toLowerCase().includes(searchString)
          ) {
            return item
          }
        }
      })
      return searchArray
    },
    fullName() {
      return this.loggedInUser.user.first_name &&
        this.loggedInUser.user.last_name
        ? this.loggedInUser.user.first_name +
            ' ' +
            this.loggedInUser.user.last_name
        : 'Foutmelding: Geen naam ingevoerd'
    },

    /* myMessage() {
      return this.$store.state.messages
    }, */
  },
  mounted() {},
  created() {
    this.getMessageUserList(this.loggedInUser.user.id)
  },
  methods: {
    ...mapActions(['getMessageUserList', 'fetchMesages']),
    moment() {
      return moment()
    },
    async getUserWiseMessage(id, name) {
      this.newMesage = []
      await this.fetchMesages(id)
      this.newMesage = this.$store.state.messages
      this.active_el = id
      this.user_name = name
    },
    /* SearchUser(search) {
      console.log(search)
    }, */
  },
}
</script>

<style scoped>
/* === CONVERSATIONS === */

.discussions {
  height: 700px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background-color: #87a3ec;
  display: inline-block;
}

.discussions .discussion {
  width: 100%;
  height: 90px;
  background-color: #fafafa;
  border-bottom: solid 1px #e0e0e0;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.discussions .search {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e0e0e0;
}

.discussions .search .searchbar {
  height: 40px;
  background-color: #fff;
  width: 70%;
  padding: 0 20px;
  border-radius: 50px;
  border: 1px solid #eeeeee;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.discussions .search .searchbar input {
  margin-left: 15px;
  height: 38px;
  width: 100%;
  border: none;
  font-family: 'Montserrat', sans-serif;
}

.discussions .search .searchbar *::-webkit-input-placeholder {
  color: #e0e0e0;
}
.discussions .search .searchbar input *:-moz-placeholder {
  color: #e0e0e0;
}
.discussions .search .searchbar input *::-moz-placeholder {
  color: #e0e0e0;
}
.discussions .search .searchbar input *:-ms-input-placeholder {
  color: #e0e0e0;
}

.discussions .message_active {
  width: 98.5%;
  height: 90px;
  background-color: #fff;
  border-bottom: solid 1px #e0e0e0;
}

.discussions .discussion .photo {
  margin-left: 20px;
  display: block;
  width: 45px;
  height: 45px;
  background: #e6e7ed;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.online {
  position: relative;
  top: 30px;
  left: 35px;
  width: 13px;
  height: 13px;
  background-color: #8bc34a;
  border-radius: 13px;
  border: 3px solid #fafafa;
}

.desc-contact {
  height: 43px;
  width: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.discussions .discussion .name {
  margin: 0 0 0 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 11pt;
  color: #515151;
}

.discussions .discussion .message {
  margin: 6px 0 0 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 9pt;
  color: #515151;
}

.timer {
  margin-left: 15%;
  font-family: 'Open Sans', sans-serif;
  font-size: 11px;
  padding: 3px 8px;
  color: #bbb;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 15px;
}

.chat {
  height: 700px;
}

.header-chat {
  background-color: #fff;
  height: 90px;
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}

.chat .header-chat .icon {
  margin-left: 30px;
  color: #515151;
  font-size: 14pt;
}

.chat .header-chat .name {
  margin: 0 0 0 20px;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-size: 13pt;
  color: #515151;
}

.chat .header-chat .right {
  position: absolute;
  right: 40px;
}

.chat .messages-chat {
  padding: 5px 5px;
}

.chat .messages-chat .message {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.chat .messages-chat .message .photo {
  display: block;
  width: 45px;
  height: 45px;
  background: #e6e7ed;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.chat .messages-chat .text {
  margin: 0 35px;
  background-color: #f6f6f6;
  padding: 15px;
  border-radius: 12px;
}

.text-only {
  margin-left: 45px;
}

.time {
  font-size: 10px;
  color: lightgrey;
  margin-bottom: 10px;
  margin-left: 85px;
}

.response-time {
  float: right;
  margin-right: 40px !important;
}

.response {
  float: right;
  margin-right: 0px !important;
  margin-left: auto; /* flexbox alignment rule */
}

.response .text {
  background-color: #e3effd !important;
}

.footer-chat {
  height: 80px;
  display: flex;
  align-items: center;
  bottom: 0;
  background-color: transparent;
  border-top: 2px solid #eee;
}

.chat .footer-chat .icon {
  margin-left: 30px;
  color: #c0c0c0;
  font-size: 14pt;
}

.chat .footer-chat .send {
  color: #fff;
  background-color: #4f6ebd;
  position: absolute;
  right: 50px;
  padding: 12px 12px 12px 12px;
  border-radius: 50px;
  font-size: 14pt;
}

.chat .footer-chat .name {
  margin: 0 0 0 20px;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-size: 13pt;
  color: #515151;
}

.chat .footer-chat .right {
  position: absolute;
  right: 40px;
}

.write-message {
  border: none !important;
  width: 60%;
  height: 50px;
  margin-left: 20px;
  padding: 10px;
}

.footer-chat *::-webkit-input-placeholder {
  color: #c0c0c0;
  font-size: 13pt;
}
.footer-chat input *:-moz-placeholder {
  color: #c0c0c0;
  font-size: 13pt;
}
.footer-chat input *::-moz-placeholder {
  color: #c0c0c0;
  font-size: 13pt;
  margin-left: 5px;
}
.footer-chat input *:-ms-input-placeholder {
  color: #c0c0c0;
  font-size: 13pt;
}

.clickable {
  cursor: pointer;
}
</style>
