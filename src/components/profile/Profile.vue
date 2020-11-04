<template>
  <div class="profile container">

    <div v-if="webId != null" class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info">Solid Profile</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" :visible="interest.length == 0" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text><SolidProfile /></b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="info">Extended Profile</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" :visible="interest.length > 0" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text><ExtendedProfile /></b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-6 variant="info">Friends</b-button>
        </b-card-header>
        <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <b-button to="/friends" variant="outline-info" class="m-1"> <b-icon-eye></b-icon-eye> Friends</b-button>
              <b-button to="/fofri" variant="outline-info" class="m-1"> <b-icon-eye></b-icon-eye> Following Friends</b-button>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-5 variant="info">Workspaces</b-button>
        </b-card-header>
        <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <b-button to="/workspaces" variant="outline-info"> <b-icon-pen></b-icon-pen> Workspaces</b-button>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-4 variant="info">Groups</b-button>
        </b-card-header>
        <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <b-button to="/groups" variant="outline-info"> <b-icon-pen></b-icon-pen> Groups</b-button>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-3 variant="info">TypeIndexes</b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <b-button to="/indexes" variant="outline-info"> <b-icon-pen></b-icon-pen>Indexes</b-button>
              <small><i>(work in progress)</i></small>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

    </div>

    <div v-else>
      <SolidLoginButton />
    </div>

  </div>
</template>

<script>

export default {
  name: 'Profile',
  components: {
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton'),
    'SolidProfile': () => import('@/components/profile/SolidProfile'),
    'ExtendedProfile': () => import('@/components/profile/ExtendedProfile')
  },

  data: function () {
    return {
      interest: ""
    }
  },
  created(){
  this.$route.params.interest != undefined ?   this.interest = this.$route.params.interest :""
  //  console.log(this.interest)

  },
  watch: {

  },
  methods:{

  },
  computed:{
    webId(){return this.$store.state.solid.webId},
    profile(){return this.$store.state.solid.profile},

    profile_url:{
      get: function() { return this.$store.state.solid.storage+"public/salut/profile.ttl"},
      set: function() {}
    }

  }
}
</script>
