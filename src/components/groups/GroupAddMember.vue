<template>
  <div class="group-member">
    <div v-if="webId != null">
      <div class="container flush">

        <b-form-group class="row">
          <FriendsSelection  v-on:selected="onSelected"/>
          <label for="name">or Member WebId</label>
          <b-form-input id="member" v-model="member" placeholder="ex https://spoggy-test.solid.community/profile/card#me"></b-form-input>
          <b-button @click="add">Add</b-button>
        </b-form-group>
      </div>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import { fetchDocument } from 'tripledoc';
import { vcard } from 'rdf-namespaces'

export default {
  name: 'GroupAddMember',
  props : ['url'],
  components: {
    'FriendsSelection': () => import('@/components/solid/FriendsSelection'),
  },
  data() {
    return {
      //member: "",
      selected: []
    }
  },
  computed:{
    webId(){
      return this.$store.state.solid.webId
    },
     member(){
          return this.$store.state.solid.webId
        },
  },
  methods:{
    onSelected: function (selected) {
  //    console.log("YEAH SELECTED !", selected)
      this.selected = selected
    },
    async add(){
      console.log(this.url)
      const groupDoc = await fetchDocument(this.url);
      let index = groupDoc.findSubject()
      this.member.length > 0 ? index.addRef(vcard.hasMember, this.member) : ""
      this.selected.forEach((s) => {
        console.log(s)
        index.addRef(vcard.hasMember, s)
      });
      await groupDoc.save();
      this.$emit('added')
      //this.members = index.getAllNodeRefs(vcard.hasMember)
      /*  let groupDoc =    await createDocument(this.path);
      let subj =   groupDoc.addSubject({identifier:"this"})
      subj.addLiteral(vcard.fn, this.name)
      subj.addNodeRef(ldp.inbox, "./"+this.name+"/inbox/")
      subj.addLiteral(dct.created, date)
      subj.addNodeRef(foaf.maker, this.webId)
      subj.addNodeRef(vcard.hasMember, this.webId)
      subj.addNodeRef(vcard.hasMember, "https://spoggy-test4.solid.community/profile/card#me")
      subj.addNodeRef(vcard.hasMember, "https://spoggy-test5.solid.community/profile/card#me")
      subj.addNodeRef(vcard.hasMember, "https://spoggy.solid.community/profile/card#me")*/
      //  await groupDoc.save();

      /*@prefix vcard: <http://www.w3.org/2006/vcard/ns#>.
      @prefix ldp: <http://www.w3.org/ns/ldp#>.

      <#this> a vcard:Group;
      vcard:fn "Solid Friends";
      ldp:inbox <./friend-requests-inbox/>;
      vcard:hasMember <https://friend1.inrupt.net/profile/card#me>;
      vcard:hasMember <https://friend2.inrupt.net/profile/card#me>.*/

    }
  },


}
</script>
