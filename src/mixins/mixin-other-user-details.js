export default{
  computed:{
    otherUserDetails(){
      if(this.$store.state.s.users[this.$route.params.otherUserId]){
        return this.$store.state.s.users[this.$route.params.otherUserId]
      }
      return {}
    }
  }
}