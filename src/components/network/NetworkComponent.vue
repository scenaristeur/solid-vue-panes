<!-- vue-vis-network -->
<template>
  <div class="network container">
    <h5>Network</h5>
    <network ref="network"
    class="wrapper"
    :nodes="nodes"
    :edges="edges"
    :options="options"
    @select="networkEvent('select')"
        @select-node="networkEvent('selectNode')"
        @select-edge="networkEvent('selectEdge')"
    >
  </network>

  <div id="node-popUp">
    <span id="node-operation">node</span> <br>
    <table style="margin:auto;">
      <tr>
        <td>id</td><td><input id="node-id" value="new value" /></td>
      </tr>
      <tr>
        <td>label</td><td><input id="node-label" value="new value" /></td>
      </tr>
    </table>
    <input type="button" value="save" id="node-saveButton" />
    <input type="button" value="cancel" id="node-cancelButton" />
  </div>

  <div id="edge-popUp">
    <span id="edge-operation">edge</span> <br>
    <table style="margin:auto;">
      <tr>
        <td>label</td><td><input id="edge-label" value="new value" /></td>
      </tr></table>
      <input type="button" value="save" id="edge-saveButton" />
      <input type="button" value="cancel" id="edge-cancelButton" />
    </div>

  </div>
</template>

<script>
// Network Event https://github.com/r3code/vue-vis-network/blob/master/example/src/App.vue
//import profileMixin from '@/mixins/profileMixin'
import { fetchDocument, /*createDocument*/ } from 'tripledoc';
import { foaf } from 'rdf-namespaces'
import "vue-vis-network/node_modules/vis-network/dist/vis-network.css";

export default {
  name: 'NetworkComponent',
  //mixins: [profileMixin],
  components: {
    //  'network': () => import("vue-vis-network")
    //'PeopleItem': () => import('@/components/profile/PeopleItem'),
  },
  props: ['value'],
  data: function () {
    //  data() {
    return {
      nodes: [
        {id: 1,  label: 'circle',  shape: 'circle' },
        {id: 2,  label: 'ellipse', shape: 'ellipse'},
        {id: 3,  label: 'database',shape: 'database'},
        {id: 4,  label: 'box',     shape: 'box'    },
        {id: 5,  label: 'diamond', shape: 'diamond'},
        {id: 6,  label: 'dot',     shape: 'dot'},
        {id: 7,  label: 'square',  shape: 'square'},
        {id: 8,  label: 'triangle',shape: 'triangle'},
      ],
      edges: [
        {from: 1, to: 2},
        {from: 2, to: 3},
        {from: 2, to: 4},
        {from: 2, to: 5},
        {from: 5, to: 6},
        {from: 5, to: 7},
        {from: 6, to: 8}
      ],
      options: {
        locale: navigator.language,
        nodes: {
          borderWidth: 1
        },
        edges:{
          arrows: 'to',
         color: 'red',
        //  font: '12px arial #ff0000',
        /*
          shadow: true,*/
        //   font: '12px arial #ff0000',
          scaling:{
              label: true,
            },
          smooth: true,
        },
        interaction: {
          navigationButtons: true,
          keyboard: true
        },
        manipulation: {
          addNode: function (data, callback) {
            // filling in the popup DOM elements
            document.getElementById('node-operation').innerHTML = "Add Node";
            this.editNode(data, this.clearNodePopUp, callback);
            console.log(data,callback)
          },
          editNode: function (data, callback) {
            // filling in the popup DOM elements
            document.getElementById('node-operation').innerHTML = "Edit Node";
            this.editNode(data, this.cancelNodeEdit, callback);
            console.log(data,callback)
          },
          addEdge: function (data, callback) {
            if (data.from == data.to) {
              var r = confirm("Do you want to connect the node to itself?");
              if (r != true) {
                callback(null);
                return;
              }
            }
            document.getElementById('edge-operation').innerHTML = "Add Edge";
            this.editEdgeWithoutDrag(data, callback);
          },
          editEdge: {
            editWithoutDrag: function(data, callback) {
              document.getElementById('edge-operation').innerHTML = "Edit Edge";
              this.editEdgeWithoutDrag(data,callback);
              console.log(data,callback)
            }
          }
        }
      }
    }
  },
  mounted() {
    this.webId = this.$route.params.webId || this.$store.state.solid.webId
    this.friends  = this.$store.state.solid.friends
    this.$refs.network.nodes.push({ id: this.webId, label: this.webId });
    this.addInterests(this.webId)
    //  this.updateFriends()
  },
  computed:{
    profile_url:{
      get: function() { return this.$store.state.solid.storage+"public/salut/profile.ttl"},
      set: function() {}
    },
    storage:{
      get: function() { return this.$store.state.solid.storage},
      set: function() {}
    },
    webId:{
      get: function() { return this.$store.state.solid.webId},
      set: function() {}
    },
    friends:{
      get: function() { return this.$store.state.solid.friends},
      set: function() {}
    },
  },
  watch: {
    $route(to, from) {
      console.log(to, from, this.$route)
      // react to route changes...
    },
    storage (st) {
      //  '$route' (to, from) {
      console.log(st)
    },
    friends(friends){
      console.log(friends)
      friends.forEach((f) => {
      //  console.log(f,i)
        this.$refs.network.nodes.push({ id:f, label: f , shape: "dot", color: "yellow"});
        this.$refs.network.edges.push({
          from: this.webId,
          to: f,
          label: "foaf:friend"
        });
         this.addInterests(f)

      });

    },
    webId(webId){
      console.log(webId)
      this.$refs.network.nodes.push({ id:webId, label: webId ,/*   "shape": "icon",
            "icon": {
                face: '"Font Awesome 5 Brands"',
                code: '\uf36e'
            }*/});
      this.addInterests(webId)
    }
  },
  methods:{
    networkEvent(e){
      console.log(e)
    },
    async addInterests(webId){
      let storage =  await solid.data[webId].storage
      let p_u = storage+"public/salut/profile.ttl"
      console.log("P8U",p_u)
      try{
        this.profileDoc = await fetchDocument(p_u)
        let subj = await this.profileDoc.getSubject(p_u+"#me")
        this.interests = await subj.getAllLiterals(foaf.topic_interest)
        console.log(this.interests)
        this.interests.forEach((interest) => {
          this.$refs.network.nodes.push({ id:interest, label: interest, shape: "triangle", color: "green" });
          this.$refs.network.edges.push({
            from: webId,
            to: interest,
            label: "foaf:topic_interest"
          });
        });

      }catch(e){
      //  console.log(e)
        //  this.profileDoc = await createDocument(p_u)
      }

    },
    editNode(data, cancelAction, callback) {
      document.getElementById('node-label').value = data.label;
      document.getElementById('node-saveButton').onclick = this.saveNodeData.bind(this, data, callback);
      document.getElementById('node-cancelButton').onclick = cancelAction.bind(this, callback);
      document.getElementById('node-popUp').style.display = 'block';
    },

    // Callback passed as parameter is ignored
    clearNodePopUp() {
      document.getElementById('node-saveButton').onclick = null;
      document.getElementById('node-cancelButton').onclick = null;
      document.getElementById('node-popUp').style.display = 'none';
    },

    cancelNodeEdit(callback) {
      this.clearNodePopUp();
      callback(null);
    },

    saveNodeData(data, callback) {
      data.label = document.getElementById('node-label').value;
      this.clearNodePopUp();
      callback(data);
    },

    editEdgeWithoutDrag(data, callback) {
      // filling in the popup DOM elements
      document.getElementById('edge-label').value = data.label;
      document.getElementById('edge-saveButton').onclick = this.saveEdgeData.bind(this, data, callback);
      document.getElementById('edge-cancelButton').onclick = this.cancelEdgeEdit.bind(this,callback);
      document.getElementById('edge-popUp').style.display = 'block';
    },

    clearEdgePopUp() {
      document.getElementById('edge-saveButton').onclick = null;
      document.getElementById('edge-cancelButton').onclick = null;
      document.getElementById('edge-popUp').style.display = 'none';
    },

    cancelEdgeEdit(callback) {
      this.clearEdgePopUp();
      callback(null);
    },

    saveEdgeData(data, callback) {
      if (typeof data.to === 'object')
      data.to = data.to.id
      if (typeof data.from === 'object')
      data.from = data.from.id
      data.label = document.getElementById('edge-label').value;
      this.clearEdgePopUp();
      callback(data);
    }
    /*  async updateFriends(){
    this.friends = await this.getFriends(this.webId)
  }*/
},

}
</script>
<style>
.wrapper{
  min-height: 100vh;
  border: 1px solid black;
  background: linear-gradient(to bottom, rgba(215, 215, 255), rgba(250, 250, 170));
  padding: 10px;
  height: 100vh;
}
#operation {
  font-size:28px;
}
#node-popUp {
  display:none;
  position:absolute;
  top:350px;
  left:170px;
  z-index:299;
  width:250px;
  height:120px;
  background-color: #f9f9f9;
  border-style:solid;
  border-width:3px;
  border-color: #5394ed;
  padding:10px;
  text-align: center;
}
#edge-popUp {
  display:none;
  position:absolute;
  top:350px;
  left:170px;
  z-index:299;
  width:250px;
  height:90px;
  background-color: #f9f9f9;
  border-style:solid;
  border-width:3px;
  border-color: #5394ed;
  padding:10px;
  text-align: center;
}
</style>
