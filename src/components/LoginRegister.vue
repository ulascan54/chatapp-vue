<template>
  <q-form @submit="submitForm">
    <q-input
    v-if="tab==='register'"
      dark
      bg-color="grey-9"
      outlined
      color="white"
      v-model="formData.name"
      class="q-mb-md"
      label="İsim"
    >
    </q-input>
    <q-input
      dark
      type="email"
      label="E-mail"
      bg-color="grey-9"
      outlined
      color="white"
      v-model="formData.email"
      class="q-mb-md"
    >
    </q-input>
    <q-input
      v-model="formData.password"
      dark
      label="Şifre"
      type="password"
      bg-color="grey-9"
      outlined
      color="white"
      class="q-mb-md"
    >
    </q-input>
    <div class="row">
      <q-space/>
    <q-btn type="submit" class="bg-white text-grey-9" :label="tab==='login' ? 'Giris Yap' :'Kayıt Ol'"/>
    </div>
  </q-form>
</template>
<script>
export default {
  props: ["tab"],
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods:{
    submitForm(){
      if (this.tab==='login') {
        console.log('login')
      }else{
        console.log('register')
      }
    }
  }
};
</script>
