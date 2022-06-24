<template>
  <div class="solid-hat-list">
    <h1>Chat for group</h1>
    for group {{group}}.<br>
    instances : {{ instances }}<br>

    <b-button v-for="instance in instances" :key="instance" @click="open(instance)">Open {{instance}}</b-button>






    <b-input v-model="chat_url" :placeholder="chat_url" />
    <b-button @click="create">Create</b-button>
    <!--  <COMPONENET />  -->
  </div>
</template>

<script>
// @ is an alias to /src

import { rdf, dct /*vcard, dct, foaf, ldp*/} from 'rdf-namespaces'
/*import {
getSolidDataset,
getThing,
//  getStringNoLocale,
//  getUrlAll
} from "@inrupt/solid-client";*/

//import { FOAF, VCARD } from "@inrupt/vocab-common-rdf";

export default {
  name: 'ChatUrl',
  props: ['group'],
  async   created(){
    this.update()
  },
  data: function () {
    return {
      instances:[],
      chat_url:"test"
    }
  },
  watch:{
    group(){
      this.update()
    },
    '$route' (to) {
      console.log(to)

      console.log(this.$route)
    },
  },
  methods:{
    open(inst){
      let folder = inst.substring(0,inst.lastIndexOf("/")+1) //inst.substring(inst.lastIndexOf('/') + 1)
      let channel = {instance: folder, created: "09/27/2020", label: "unknown"}
      console.log(channel)
      this.$store.commit('chat/setChannel', channel)

      console.log(this.$route)
      this.$route.params.group = undefined
      //  this.$route.push({ name: 'ChatUrl', params: { group: undefined } })
    },
    async  create(){
      console.log(this.chat_url)
      var dateObj = new Date();
      console.log(dateObj)
      var date = dateObj.toISOString()
      let timestamp = Date.now()
      console.log(timestamp)
      let chatDoc = await this.$fc.createFile(this.chat_url);
      let subj =   chatDoc.addSubject({identifier: "this"})
      //subj.addLiteral(sioc.content, this.activity)
      subj.addRef(rdf.type, "http://www.w3.org/ns/pim/meeting#LongChat")
      subj.addLiteral(dct.created, date)
      //  subj.addRef(dct.author, "webid")
      subj.addLiteral(dct.title, "chat")
      subj.addRef("http://www.w3.org/2005/01/wf/flow#participation", this.chat_url+"#"+timestamp)
      subj.addRef("http://www.w3.org/ns/ui#sharedPreferences", this.chat_url+"#SharedPreferences")

      let instance =  chatDoc.addSubject({identifier: timestamp})
      instance.addLiteral("http://www.w3.org/ns/ui#backgroundColor", "#c0d2fe")

      await chatDoc.save();

      let groupDoc = await this.$fc.readFile(this.group);
      let group_instance =  groupDoc.addSubject({identifier: timestamp})
      group_instance.addRef("http://www.w3.org/ns/solid/terms#forClass", "http://www.w3.org/ns/pim/meeting#LongChat")
      group_instance.addRef("http://www.w3.org/ns/solid/terms#instance", this.chat_url+"#this")

      await groupDoc.save();


      /*
      </long-chat/index.ttl#this>            a                    mee:LongChat .
      </long-chat/index.ttl#this>            dc:author            </profile/card#me> .
      </long-chat/index.ttl#this>            dc:created           "2018-07-06T21:36:04Z"^^XML:dateTime .
      </long-chat/index.ttl#this>            dc:title             "Chat channel" .
      </long-chat/index.ttl#this>            flow:participation   :id1555491215455 .
      </long-chat/index.ttl#this>            ui:sharedPreferences :SharedPreferences .
      </long-chat/index.ttl#id1555491215455> ic:dtstart           "2019-04-17T08:53:35Z"^^XML:dateTime .
      </long-chat/index.ttl#id1555491215455> flow:participant     </profile/card#me> .
      </long-chat/index.ttl#id1555491215455> ui:backgroundColor   "#c0d2fe" .*/





    },
    async update(){
      console.log(this.group)
      let groupDoc = await this.$fc.readFile(this.group);
      let gSubj = groupDoc.getSubject(this.group+"#this")
      console.log(gSubj)
      console.log(groupDoc)
      let chats = groupDoc.findSubjects("http://www.w3.org/ns/solid/terms#forClass", "http://www.w3.org/ns/pim/meeting#LongChat")
      console.log(chats.length, chats)
      let instances = []
      chats.forEach((chat) => {
        let inst = chat.getRef('http://www.w3.org/ns/solid/terms#instance')
        console.log("INST",inst)
        if ( inst != null ){
          instances.push(inst)
        }

      });
      this.instances = instances

      //"http://www.w3.org/ns/solid/terms#instance"

      //https://github.com/solid/solid-panes/blob/master/Documentation/conventions.md#long-chat
      //let part = this.group.substring(this.group.lastIndexOf('/') + 1).split(".ttl")[0]
      /*let parts = this.group.split("/") //.lastIndexOf('/')
      console.log(parts)
      console.log(parts.pop())
      let root = parts.join("/")
      console.log(root)*/

      let folder = this.group.split(".ttl")[0]
      let index = folder+"/index.ttl"
      this.chat_url = index



      /*  const myDataset = await getSolidDataset(this.group);
      const subject = getThing( myDataset, this.group);
      console.log(subject)*/
    }
  }
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
}
</script>
