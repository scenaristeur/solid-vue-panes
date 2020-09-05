<template>
  <div class="groups-view container">
    <!--  <Component /> -->
    Display
    <b-card-group deck>
      <GroupMembers :members="members"/>
      <GroupFiliation :parent="parent"/>
    </b-card-group>
    {{ currentGroup.name}} <br>
    {{ currentGroup.url}}<br>
    purpose: {{ purpose}}<br>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  getSolidDataset,
  getThing,
  getStringNoLocale,
  getUrl,
  getUrlAll
} from "@inrupt/solid-client";
import { VCARD } from "@inrupt/vocab-common-rdf";

export default {
  name: 'GroupDisplay',
  components: {
    //  'GroupProfile': () => import('@/views/holon/group/GroupProfile'),
    'GroupMembers': () => import('@/views/holon/group/GroupMembers'),
    'GroupFiliation': () => import('@/views/holon/group/GroupFiliation'),
    /*
    'Domains': () => import('@/views/holon/group/Domains'),
    'Redevabilities': () => import('@/views/holon/group/Redevabilities'),*/

  },
  data: function () {
    return {
      dateCreated: "",
      purpose: "",
      members: [],
      parent: "",

      //  webId: {},
      //  friends: [],
    }
  },

  async created() {
    this.currentGroup = this.$store.state.gouvernance.currentGroup
    let file = this.currentGroup.url+"index.ttl"
    let resource =   this.currentGroup.url+"index.ttl#this"
    console.log(file, resource)
    const itemResource = await getSolidDataset(
      file
    );
    const thing = getThing(
      itemResource,
      resource
    );

    this.dateCreated = getStringNoLocale(thing, "https://schema.org/dateCreated");
    //  console.log("Date created",dateCreated)
    this.purpose = getStringNoLocale(thing, "http://www.w3.org/ns/org#purpose");
    this.parent = getUrl(thing, "http://www.w3.org/ns/org#subOrganizationOf");
    this.members = getUrlAll(thing, VCARD.hasMember);
  },
  computed:{
    groups: {
      get: function() { return this.$store.state.gouvernance.groups},
      set: function() {}
    },
    webId: {
      get: function() { return this.$store.state.solid.webId},
      set: function() {}
    },
    currentGroup: {
      get: function() { return this.$store.state.gouvernance.currentGroup},
      set: function() {}
    },

  },
}
</script>
