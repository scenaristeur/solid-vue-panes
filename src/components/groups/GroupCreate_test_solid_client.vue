<template>
  <div class="groups-list">
    <h1>This is an groupCreate page</h1>

    <div class="container">

      <b-form-group class="row">
        <label for="name">Group Name</label>
        <b-form-input id="name" v-model="name" :placeholder="'ex: '+name"></b-form-input>
        <label for="url">Group url</label>
        <b-form-input id="url" v-model="url" :placeholder="'ex: '+url"></b-form-input>
        <div class="mt-2">Value: {{ url }}</div>
        <b-button @click="add">Add</b-button>
      </b-form-group>
    </div>

    wi :  {{ webId}}<br>
    sto {{ storage }}
  </div>
</template>

<script>
// @ is an alias to /src
import {   Session,  getClientAuthnWithDependencies } from '@inrupt/solid-client-authn-browser'
import { getSolidDataset } from "@inrupt/solid-client"
    import { createThing } from "@inrupt/solid-client";

export default {
  name: 'GroupCreate',
  data() {
return {
  name: "Grogroup"
}
},
async created(){
  // Build a session
  const session = new Session({
      clientAuthn: getClientAuthnWithDependencies({})},
      "mySession"
  );

  if (!session.sessionInfo.isLoggedIn) {
    // Redirect the user to their identity provider:
    // (This moves the user away from the current page.)
    session.login({
        // Specify the URL of the user's OIDC issuer.
        oidcIssuer: 'https://solid.community',
        // Specify the URL the system should redirect to after login.
        redirectUrl: '/groups',
    });
  }

  // At your redirect site (e.g., https://example.com/redirect):
  if (!session.sessionInfo.isLoggedIn) {
    await session.handleIncomingRedirect(new URL(window.location.href));
  }
  console.log("SESSION", session)
  // You can now make authenticated requests by passing session.fetch, for example:
  getSolidDataset(session.sessionInfo.webId, { fetch: session.fetch });
},
methods:{
  add(){
    console.log(this.name, this.url)



const thing = createThing();
    /*@prefix vcard: <http://www.w3.org/2006/vcard/ns#>.
    @prefix ldp: <http://www.w3.org/ns/ldp#>.

    <#this> a vcard:Group;
    vcard:fn "Solid Friends";
    ldp:inbox <./friend-requests-inbox/>;
    vcard:hasMember <https://friend1.inrupt.net/profile/card#me>;
    vcard:hasMember <https://friend2.inrupt.net/profile/card#me>.*/

  }
},
computed:{
  webId(){
    return this.$store.state.solid.webId
  },
  storage(){
    return this.$store.state.solid.storage
  },
  url(){
    return this.$store.state.solid.storage+"public/groups/"
  }
},
}
</script>
