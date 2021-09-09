<template>
  <router-view />
</template>
<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions('s',['handleAuthStateChanged'])
  },
  mounted() {
    this.handleAuthStateChanged()
  },
}
</script>
