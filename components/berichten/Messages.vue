<template>
  <div
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
        <div class="flex items-center pr-10 mt-1 m-4">
          {{ message.data.relationships.messager.data.id }}
          <span
            class="flex ml-1 h-auto bg-gray-900 text-gray-200 p-1 font-normal rounded-sm px-1 items-end"
            >{{ message.data.attributes.content }}
            <span class="text-gray-400 pl-1" style="font-size: 8px">{{
              message.data.attributes.created_at | cdate
            }}</span>
          </span>
        </div>
      </div>
    </div>
    <div v-else>Messages not found</div>
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

export default {
  filters: {
    cdate(datass) {
      if (!datass) return ''
      // datass = datass.toString()
      const theDate = new Date(datass)
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
      const timeString = hour + ':' + minute + ' ' + ap
      return timeString
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
  },
}
</script>

<style></style>
