<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="$route.fullPath.includes('/chat')"
          @click="$router.go(-1)"
          icon="arrow_back people_alt"
          flat
        />
        <q-btn
           to="/auth"
          icon="account_circle login"
          class="absolute-right q-pr-lg"
          flat
        />

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
import { openURL } from "quasar";

export default {
  computed: {
    title() {
      console.log(this.$route);
      let currentPath = this.$route.fullPath;
      if (currentPath == "/") return "ScreetChat";
      else if (currentPath == "/chat") return "Mesajlar";
      else if (currentPath == "/auth") return "Giriş";
    },
  },
  methods: {
    openURL,
  },
};
</script>
