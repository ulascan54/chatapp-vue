<template>
  <q-page class="flex column bg-grey-8">
    <q-banner  v-if="!otherUserDetails.online" inline-actions class="bg-grey-4 text-center">
      <q-icon name="wifi_off" color="grey-8" :size="'20px'" class="q-mr-sm" />
      {{ otherUserDetails.name }} şuan aktif değil !
    </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="(message, index) in messages"
        :key="index"
        class="text-white"
        :bg-color="message.from == 'me' ? 'dark' : 'grey-4'"
        :name="message.from == 'me' ? userDetails.name : otherUserDetails.name"
        :text="[message.text]"
        :text-color="message.from == 'me' ? 'white' : 'dark'"
        :sent="message.from === 'me' ? true : false"
      />
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-form class="full-width">
          <q-input
            v-model="newMessage"
            dark
            outlined
            rounded
            dense
            placeholder="Mesajınız"
            color="white"
            @keydown.enter="sendMessage"
          >
            <template v-slot:after>
              <q-btn
                @click="sendMessage"
                round
                dense
                flat
                icon="chat_bubble"
                class="q-mt-md"
                size="1.3rem"
                color="white"
              ></q-btn>
            </template>
          </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import { mapActions, mapState } from "vuex";
import mixinOtherUsersDetails from "../mixins/mixin-other-user-details.js";
export default {
  mixins: [mixinOtherUsersDetails],
  data() {
    return {
      newMessage: "",
    };
  },
  computed: {
    ...mapState("s", ["messages", "userDetails"]),
  },
  methods: {
    ...mapActions("s", ["firebaseGetMessages", "firebaseStopGettingMessages"]),
    sendMessage() {
      console.log(this.newMessage);
      this.messages.push({
        text: this.newMessage,
        from: "me",
      });
      this.newMessage = "";
    },
  },
  mounted() {
    this.firebaseGetMessages(this.$route.params.otherUserId);
  },
  unmounted() {
    console.log("çalıştı");
    this.firebaseStopGettingMessages();
  },
};
</script>
