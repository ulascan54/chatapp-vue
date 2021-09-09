<template>
  <q-page class="q-pa-md">
    <q-list separator>
      <q-item
        v-for="(user,key) in users"
        :key="key"
        class="q-my-sm"
        clickable
        v-ripple
        :to="'/chat/'+key"
      >
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.name.charAt(0) }}
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
        </q-item-section>

        <q-item-section side >
          <q-icon :name="user.online ? 'wifi' : 'wifi_off'" :color="user.online ? 'light-green-4' : 'grey-4'"  class="q-mx-xs q-pa-xs"/>
          <q-badge :color="user.online ? 'light-green-4' : 'grey-4'"> {{ user.online ? 'Online' : 'Offline'}} </q-badge>
        </q-item-section>
      </q-item>
    </q-list>
    <q-separator></q-separator>
  </q-page>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  // data() {
  //   return {
  //     // users: [
  //       // {
  //       //   id: 1,
  //       //   name: "Ruddy",
  //       //   online:true,
  //       // },
  //       // {
  //       //   id: 2,
  //       //   name: "Mallorie",
  //       //   online:false,
  //       // },
  //       // {
  //       //   id: 3,
  //       //   name: "Elisabetta",
  //       //   online:true,
  //       // },
  //     // ],
  //   };
  // },
  computed:{
    ...mapGetters('s',['users'])
  }
};
</script>
