export default{
  computed:{
    otherUserDetails(){
      return this.$store.state.s.users[this.$route.params.otherUserId]
    }
  }
}