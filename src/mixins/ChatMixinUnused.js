//import store from '@/store'
export default {
  created(){
    console.log("hello from chatmixin")
  },
  methods: {
    async fixRoot(root){
      console.log("root",root)
      !root.endsWith("/") ? root = root+"/" : "";
      !root.endsWith("/parle/") ? root = root+"parle/" : "";
      console.log("Root root",root)
      this.$store.commit('chat/setRoot', root)
    }
  }
}
