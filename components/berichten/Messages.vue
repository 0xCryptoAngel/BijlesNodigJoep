<template>
  <div>
    <div class="relative overflow-hidden mb-8">
      <div class="grid grid-cols-2 gap-0">
        <div class="col-auto discussions">
          <div class="discussion search">
            <div class="searchbar">
              <i class="fa fa-search" aria-hidden="true"></i>
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div
            v-for="message in allMessages.included"
            :id="message.id"
            :key="message.id"
            class="discussion"
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
            <div class="timer">{{ message.attributes.last_seen | cdate }}</div>
          </div>
          <!-- <div class="discussion message-active">
            <div
              class="photo"
              style="
                background-image: url(https://image.noelshack.com/fichiers/2017/38/2/1505775062-1505606859-portrait-1961529-960-720.jpg);
              "
            >
              <div class="online"></div>
            </div>
            <div class="desc-contact">
              <p class="name">Megan Leib</p>
              <p class="message">9 pm at the bar if possible 😳</p>
            </div>
            <div class="timer">12 sec</div>
          </div> -->

          <!-- <div class="discussion">
            <div
              class="photo"
              style="
                background-image: url(http://e0.365dm.com/16/08/16-9/20/theirry-henry-sky-sports-pundit_3766131.jpg?20161212144602);
              "
            >
              <div class="online"></div>
            </div>
            <div class="desc-contact">
              <p class="name">Dave Corlew</p>
              <p class="message">
                Let's meet for a coffee or something today ?
              </p>
            </div>
            <div class="timer">3 min</div>
          </div> -->
        </div>
        <div class="col-auto chat overflow-auto">
          <div class="header-chat">
            <i class="icon fa fa-user-o" aria-hidden="true"></i>
            <p class="name">User name</p>
          </div>
          <div class="messages-chat overflow-auto">
            <!-- <div class="message">
              <div
                class="photo"
                style="
                  background-image: url(https://image.noelshack.com/fichiers/2017/38/2/1505775062-1505606859-portrait-1961529-960-720.jpg);
                "
              >
                <div class="online"></div>
              </div>
              <p class="text">Hi, how are you ?</p>
            </div>
            <div class="message text-only">
              <p class="text">
                What are you doing tonight ? Want to go take a drink ?
              </p>
            </div>
            <p class="time">14h58</p> -->
            <div
              v-for="chat in allMessages.data"
              :id="chat.id"
              :key="chat.id"
              class="message text-only"
            >
              <div class="response">
                <p class="text">{{ chat.attributes.content }}</p>
                <p class="response-time time">
                  {{ chat.attributes.created_at | cdate }}
                </p>
              </div>
            </div>
            <!-- <div class="message">
              <div
                class="photo"
                style="
                  background-image: url(https://image.noelshack.com/fichiers/2017/38/2/1505775062-1505606859-portrait-1961529-960-720.jpg);
                "
              >
                <div class="online"></div>
              </div>
              <p class="text">9 pm at the bar if possible 😳</p>
            </div>
            <p class="time">15h09</p> -->
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
      </div>
    </div>
    <!-- <div
      id="journal-scroll"
      class="overflow-auto px-1 py-1"
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
        class="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end flex justify-end"
        >Lets jump on a video call.
        <span class="text-gray-400 pl-1" style="font-size: 8px"
        >02.30am</span
        ></span
    >
    </div> -->
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import moment from 'moment'
/* import 'moment/locale/pt-br' */
export default {
  filters: {
    cdate(datass) {
      if (!datass) return ''
      return moment(datass).fromNow()
      // datass = datass.toString()
      /* const theDate = new Date(datass)
      let hour = theDate.getHours()
      let minute = theDate.getMinutes()
      let second = theDate.getSeconds()
      let ap = 'AM'
      if (hour > 11) {
        ap = 'PM'
      }
      if (hour > 12) {
        hour = hour - 12
      }
      if (hour === 0) {
        hour = 12
      }
      if (hour < 10) {
        hour = '0' + hour
      }
      if (minute < 10) {
        minute = '0' + minute
      }
      if (second < 10) {
        second = '0' + second
      }
      const timeString = hour + ':' + minute + ' ' + ap */
      // return timeString
    },
  },
  computed: {
    ...mapGetters(['allMessages']),
    ...mapState(['messages']),
  },
  mounted() {},
  created() {
    this.fetchMesages()
  },
  methods: {
    ...mapActions(['fetchMesages']),
    moment() {
      return moment()
    },
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

.discussions .message-active {
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
