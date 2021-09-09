<template>
  <q-page ref="pageChat" class="flex column page-chat">
    <q-banner
      v-if="!otherUserDetails.online"
      inline-actions
      class="bg-grey-4 text-center"
    >
      <q-icon name="wifi_off" color="grey-8" :size="'20px'" class="q-mr-sm" />
      {{ otherUserDetails.name }} şuan aktif değil !
    </q-banner>
    <div
      :class="{ invisible: !showMessages }"
      class="q-pa-md column col justify-end"
    >
      <q-chat-message
        v-for="(message, index) in messages"
        :key="index"
        class="text-white"
        :messagesCount="messagesCount++"
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
            ref="newMessage"
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
      showMessages: false,
      messagesCount: 0,
      messageMark: 200,
    };
  },
  computed: {
    ...mapState("s", ["messages", "userDetails"]),
  },
  methods: {
    ...mapActions("s", [
      "firebaseGetMessages",
      "firebaseStopGettingMessages",
      "firebaseSendMessage",
    ]),
    sendMessage() {
      this.firebaseSendMessage({
        message: {
          text: this.newMessage,
          from: "me",
        },
        otherUserId: this.$route.params.otherUserId,
      });
      this.newMessage = "";
      this.$refs.newMessage.focus();
      this.messagesCount++;
    },
    scrollToBottom(pageChat) {
      setTimeout(() => {
        window.scrollTo(0, pageChat + 5000);
        this.messageMark = 20;
      }, this.messageMark);
    },
  },
  watch: {
    messagesCount(val, _) {
      if (val) {
        let pageChat = this.$refs.pageChat.$el.scrollHeight;
        this.scrollToBottom(pageChat);
        setTimeout(() => {
          this.showMessages = true;
        }, 200);
      }
    },
    messages(val, nval) {
      console.log(val, nval);
      log;
    },
  },
  mounted() {
    this.firebaseGetMessages(this.$route.params.otherUserId);
    this.messagesCount++;
  },
  unmounted() {
    console.log("çalıştı");
    this.firebaseStopGettingMessages();
  },
};
</script>
<style lang="sass">
.page-chat
  background: #00000099
  &:after
    content: ''
    display: block
    position: fixed
    left:0
    right:0
    top:0
    bottom:0
    z-index: -1
    opacity: 0.4
    background-image: radial-gradient(circle at 100% 150%, silver 24%, white 24%, white 28%, silver 28%, silver 36%, white 36%, white 40%, transparent 40%, transparent),radial-gradient(circle at 0    150%, silver 24%, white 24%, white 28%, silver 28%, silver 36%, white 36%, white 40%, transparent 40%, transparent),radial-gradient(circle at 50%  100%, white 10%, silver 10%, silver 23%, white 23%, white 30%, silver 30%, silver 43%, white 43%, white 50%, silver 50%, silver 63%, white 63%, white 71%, transparent 71%, transparent),radial-gradient(circle at 100% 50%, white 5%, silver 5%, silver 15%, white 15%, white 20%, silver 20%, silver 29%, white 29%, white 34%, silver 34%, silver 44%, white 44%, white 49%, transparent 49%, transparent),radial-gradient(circle at 0    50%, white 5%, silver 5%, silver 15%, white 15%, white 20%, silver 20%, silver 29%, white 29%, white 34%, silver 34%, silver 44%, white 44%, white 49%, transparent 49%, transparent)
    background-size: 100px 50px
</style>
