<template>
  <q-page class="flex column">
    <q-banner inline-actions class="bg-grey-4 text-center">
      <q-icon name="wifi_off" color="grey-8" :size="'20px'" class="q-mr-sm"/>
      Kullanıcı şuan aktif değil !
    </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="(message, index) in messages"
        :key="index"
        :name="message.from"
        :text="[message.text]"
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
export default {
  data() {
    return {
      newMessage: "",
      messages: [
        {
          text: "Naber nasılsın",
          from: "me",
        },
        {
          text: "iyi knk sen",
          from: "them",
        },
        {
          text: "İyi ne olsun",
          from: "me",
        },
      ],
    };
  },
  methods: {
    sendMessage() {
      console.log(this.newMessage);
      this.messages.push({
        text: this.newMessage,
        from: "me",
      });
      this.newMessage = "";
    },
  },
};
</script>
