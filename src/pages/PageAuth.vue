<template>
  <q-page class="q-pa-md bg-grey-7">
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey-8"
        active-color="primary"
        indicator-color="grey-8"
        align="justify"
      >
        <q-tab name="login" label="Giris" />
        <q-tab name="register" label="Kayıt Ol" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated class="bg-primary text-white">
        <q-tab-panel name="login">
          <login-register :tab="tab" />
        </q-tab-panel>

        <q-tab-panel name="register">
          <login-register :tab="tab" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      tab: ref('login')
    }
  },
  components:{
    'login-register' : require('components/LoginRegister.vue').default 
  }
}
</script>
