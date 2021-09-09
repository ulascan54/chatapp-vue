<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="$route.fullPath.includes('/chat')"
          @click="$router.go(-1)"
          icon="arrow_back people_alt"
          class="q-mt-sm absolute-left"
          flat
        />
        <q-btn
          v-if="!userDetails.userId"
          to="/auth"
          icon="account_circle login"
          class="absolute-right q-pr-lg q-mt-sm"
          flat
        />
        <q-btn
          v-else
          @click="logoutUser"
          to="/auth"
          icon="power_settings_new"
          class="absolute-right q-pr-sm"
          flat
        >
        </q-btn
        ><span class="top-text absolute-right">{{ userDetails.name }}</span>

        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";
import mixinOtherUsersDetails from "../mixins/mixin-other-user-details.js";

export default {
  mixins: [mixinOtherUsersDetails],
  computed: {
    ...mapState("s", ["userDetails"]),
    title() {
      let currentPath = this.$route.fullPath;
      if (currentPath == "/") return "ScreetChat";
      else if (currentPath.includes("/chat")) return this.otherUserDetails.name;
      else if (currentPath == "/auth") return "Giriş";
    },
  },
  methods: {
    ...mapActions("s", ["logoutUser"]),
  },
};
</script>
<style lang="sass">
.q-toolbar
  .q-btn
    top:-10px
.top-text
  font-size:10px
  top:32px
  right:8px
</style>
