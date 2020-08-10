//import store from '@/store'
export default {
  created(){

  },
  methods: {
    async fixRoot(root){
      !root.endsWith("/") ? root = root+"/" : "";
      !root.endsWith("/parle/") ? root = root+"parle/" : "";
      console.log("Root root",root)
      this.$store.commit('chat/setRoot', root)
    }
  }
}
