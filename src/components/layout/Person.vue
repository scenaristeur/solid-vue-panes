<template>
  <!-- Team member https://bootsnipp.com/snippets/92xNm -->
  <div class="container fluid">
    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
      <div class="mainflip">
        <div class="frontside">
          <div class="card">
            <div class="card-body text-center">
              <p><img  v-if="profile.photo != undefined && profile.photo!= 'null'" class=" img-fluid" v-bind:src="'https://images.weserv.nl/?url='+profile.photo+'&w100&h=100'" alt="card image"></p>
              <h5 class="card-title">{{profile.name || this.webId}}</h5>
              <small> <span class="card-text" v-if="profile.organization"><b>Organization:</b> {{profile.organization}}<br></span>
                <span class="card-text" v-if="profile.role"> <b>Role:</b> {{profile.role}}<br></span></small>


                <!--
                <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>

                <b-button v-if="friends.length > 0"  v-b-toggle.collapse-1 variant="primary">{{friends.length}} friends</b-button>
              -->
            </div>
          </div>
        </div>
        <div class="backside container fluid">
          <div class="card">
            <h6 class="card-title mt-2"><a v-bind:href="webId" target="_blank">{{profile.name || this.webId}}</a></h6>
            <b-button size="sm" v-if="friends.length > 0" class="mx-auto" variant="primary">{{friends.length}} friends</b-button>

            <b-button size="sm" v-if="profile.workspaces != undefined && profile.workspaces.length > 0" class="mx-auto" variant="outline-primary">{{profile.workspaces.length}} workspaces</b-button>
            <b-button size="sm" v-if="profile.groups != undefined && profile.groups.length > 0" class="mx-auto" variant="outline-primary">{{profile.groups.length}} groups</b-button>
            <b-button size="sm" v-if="profile.tensions != undefined && profile.tensions.length > 0" class="mx-auto" variant="outline-primary">{{profile.tensions.length}} tensions</b-button>



            <div class="card-body text-center mt-4" style="overflow-y: auto;height: 100px;">
              <p class="card-text" v-if="profile.locality">Locality: {{profile.locality}}</p>
              <p class="card-text" v-if="profile.gender">Gender: {{profile.gender}}</p>
              <p class="card-text" v-if="profile.bday">Birthday: {{profile.bday}}</p>
              <p class="card-text" v-if="profile.note">Note: {{profile.note}}</p>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ./Team member -->
</template>

<script>
import profileMixin from '@/mixins/profileMixin'

export default {
  name: 'Person',
  props: {
    webId: String
  },
  mixins: [profileMixin],
  data: function () {
    return {
      profile: {},
      friends: [],
      //  workspaces: [],
      //  groups: [],
      //  tensions: [],
    }
  },
  async  created(){
    this.profile = await this.getProfile(this.webId)
    this.friends = await this.getFriends(this.webId)
    //  this.workspaces = await this.getWorkspaces(this.webId)
    //  this.groups = await this.getGroups(this.webId)

    //  this.tensions = await this.getTensions(this.webId)
  },
}
</script>
<style scoped>
/* FontAwesome for working BootSnippet :> */

@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
#team {
  background: #eee !important;
}

.btn-primary:hover,
.btn-primary:focus {
  background-color: #108d6f;
  border-color: #108d6f;
  box-shadow: none;
  outline: none;
}

.btn-primary {
  color: #fff;
  background-color: #007b5e;
  border-color: #007b5e;
}

section {
  padding: 60px 0;
}

section .section-title {
  text-align: center;
  color: #007b5e;
  margin-bottom: 50px;
  text-transform: uppercase;
}

#team .card {
  border: none;
  background: #ffffff;
}

.image-flip:hover .backside,
.image-flip.hover .backside {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
  border-radius: .25rem;
}

.image-flip:hover .frontside,
.image-flip.hover .frontside {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.mainflip {
  -webkit-transition: 1s;
  -webkit-transform-style: preserve-3d;
  -ms-transition: 1s;
  -moz-transition: 1s;
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transition: 1s;
  transform-style: preserve-3d;
  position: relative;
}

.frontside {
  position: relative;
  -webkit-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  z-index: 2;
  margin-bottom: 30px;
}

.backside {
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  -webkit-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
  -moz-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
  box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
}

.frontside,
.backside {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 1s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 1s;
  -moz-transform-style: preserve-3d;
  -o-transition: 1s;
  -o-transform-style: preserve-3d;
  -ms-transition: 1s;
  -ms-transform-style: preserve-3d;
  transition: 1s;
  transform-style: preserve-3d;
}

.frontside .card,
.backside .card {
  min-height: 312px;
}

.backside .card a {
  font-size: 18px;
  color: #007b5e !important;
}

.frontside .card .card-title,
.backside .card .card-title {
  color: #007b5e !important;
}

.frontside .card .card-body img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
</style>
