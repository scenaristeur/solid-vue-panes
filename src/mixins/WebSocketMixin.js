//import store from '@/store'
export default {
  created(){

  },
  methods: {
    createWebSocket(){
      let root = this.$store.state.parle.root
      let withoutProtocol = root.split('//')[1]
      let sock = withoutProtocol.split('/')[0]+"/"
      let socket = new WebSocket('wss://'+sock, ['solid.0.1.0']);
      this.$store.commit('websocket/setSocket', socket)

    },
    addSubscription(fileUrl){
      this.$store.state.websocket.socket.send('sub '+fileUrl);
    }
  }
}
