<template>
  <div class="form-submit container">
    <div class="mt-3">

      <!--      <SaveParameters />-->
      {{ message }}
      <!--  <b-button-group>-->
      <!--  <b-button variant="success" @click="save" disabled>Save on currentShape (footprint)</b-button>

      <b-button variant="info" disabled>Choose Where to save</b-button>-->
      Workspace : {{ workspace}}<br>
      <b-button variant="warning" @click="download">Download</b-button>
      <b-button variant="info" @click="save">Stream that Activity</b-button>
      <b-button variant="success" @click="saveWorkspace">Save on Workspace</b-button>
      <b-button variant="success" @click="savePod" disabled>Save on my POD (public/shighltest) Add me to your trusted apps</b-button>
      <b-button variant="success" @click="savePublic">Save on holacratie Pod</b-button>
      <!--</b-button-group>-->
    </div>
    <ul>
      <li> <a :href="currentShape" target="blank">currentShape</a></li>
      <li> <a :href="webId" target="blank">{{ webId }}</a></li>
      <li> <a :href="storage" target="blank">{{ storage }}</a></li>
    </ul>

  </div>
</template>

<script>
//import auth from 'solid-auth-client';
import UtilMixin from '@/mixins/crud/UtilMixin.js'
import TtlMixin from '@/mixins/crud/TtlMixin.js'
import SolidMixin from '@/mixins/crud/SolidMixin.js'
//import SaveParameters from '@/components/SaveParameters.vue'

export default {
  name: 'FormSubmit',
  mixins: [UtilMixin, TtlMixin, SolidMixin],
  components: {
    //  SaveParameters
  },
  props: {
    attribut: String
  },
  created(){
    this.workspace = this.$store.state.crud.workspace
  },

  data: function () {
    return {
      message: ""
      /*  currentShape: "",
      shapes: [],*/
    }
  },

  computed: {
    webId(){
      return this.$store.state.crud.webId
    },
    currentShape () {
      return this.$store.state.crud.currentShape
    },
    storage () {
      return this.$store.state.crud.storage
    },
    workspace: {
      get: function() { return this.$store.state.crud.workspace},
      set: function() {}
    },
  },
  methods: {
    save() {
      console.log("CurrentShape",this.currentShape)
      console.log("data", this.$store.state.crud.formData)
      console.log(this.$store.state.crud.formData[this.currentShape])
      let data = this.$store.state.crud.formData[this.currentShape]
      //console.log("DATA TO CREATE", data)
      let as = this.streamActivity(this.webId, data)
      console.log(as)
      this.saveFile(as)
    },
    async savePublic(){
      let data = this.$store.state.crud.formData[this.currentShape]
      let ttlData = {form: data, shape: this.currentShape, author: this.webId}
      let ttlFile = this.buildTtl(ttlData)
      console.log("TTL",ttlFile)
      let path = ttlFile.ttlData.shape+"/"+ttlFile.filename
      console.log(path)
      await this.fc.createFile(path, ttlFile.content, "text/turtle")
      .then(
        result =>{
          console.log(result)
          console.log (result.url)
          this.message = new Date().toLocaleTimeString()+" : Saved at "+result.url
          alert(this.message)
        },err => {
          console.log(err)
          this.message = new Date().toLocaleTimeString()+" : "+ err+ " It seems there is an issue to store on Holocratie POD ?"
          alert(this.message)
        }
      )
    },
    async saveWorkspace(){
      let data = this.$store.state.crud.formData[this.currentShape]
      console.log(this.fc)
      console.log(this.storage)


      /*  let path = this.storage+"public/shighltest/test.text"
      await this.fc.createFile(path, JSON.stringify(data), "text/plain")*/

      let ttlData = {form: data, shape: this.currentShape, author: this.webId}
      let ttlFile = this.buildTtl(ttlData)
      console.log("TTL",ttlFile)
      let path = this.workspace+this.localname(this.currentShape)+"/"+ttlFile.filename
      console.log(path)
      await this.fc.createFile(path, ttlFile.content, "text/turtle")
      .then(
        result =>{
          console.log(result)
          console.log (result.url)
          this.message=new Date().toLocaleTimeString()+" : Saved at "+result.url
          alert(this.message)
        },err => {
          console.log(err)
          this.message =new Date().toLocaleTimeString()+" : "+ err+ " Are you sure you are logged to your pod and you have allowed this app to write on ?"
          alert(this.message)
        }
      )

    },
    async savePod(){
      let data = this.$store.state.crud.formData[this.currentShape]
      console.log(this.fc)
      console.log(this.storage)


      /*  let path = this.storage+"public/shighltest/test.text"
      await this.fc.createFile(path, JSON.stringify(data), "text/plain")*/

      let ttlData = {form: data, shape: this.currentShape, author: this.webId}
      let ttlFile = this.buildTtl(ttlData)
      console.log("TTL",ttlFile)
      let path = this.storage+"public/shighltest/"+this.localname(this.currentShape)+"/"+ttlFile.filename
      console.log(path)
      await this.fc.createFile(path, ttlFile.content, "text/turtle")
      .then(
        result =>{
          console.log(result)
          console.log (result.url)
          this.message=new Date().toLocaleTimeString()+" : Saved at "+result.url
          alert(this.message)
        },err => {
          console.log(err)
          this.message =new Date().toLocaleTimeString()+" : "+ err+ " Are you sure you are logged to your pod and you have allowed this app to write on ?"
          alert(this.message)
        }
      )

    },
    download(){
      let data = this.$store.state.crud.formData[this.currentShape]
      data['http://www.w3.org/1999/02/22-rdf-syntax-ns#type'] = this.currentShape
      console.log("DATA TO CREATE", data)
      this.saveFile(data)
    },
    saveFile (data){
      //EXPORT https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/

      let fileName= this.localname(this.currentShape)
      let extension = "json"

      var textToWrite=JSON.stringify(data, undefined, 2);
      //  var fileNameToSaveAs="";
      var textFileAsBlob="";

      console.log(data);
      /*
      if((typeof data != "undefined")&& (data.length>0)){
      textToWrite=data;
    }else{
    textToWrite = document.getElementById("inputTextToSave").value;
  }

  if ((typeof nomFichier != "undefined") && (nomFichier.length>0)){
  fileNameToSaveAs = nomFichier+"."+extension;
}else{
fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value+"."+extension;
}*/


if ((typeof extension != "undefined") && (extension.length>0)){
  switch(extension){
    case "ttl" :
    textFileAsBlob = new Blob([textToWrite], {
      type:
      'text/turtle'
    }
  );
  break;
  case "rdf" :
  textFileAsBlob = new Blob([textToWrite], {
    type:
    'application/rdf+xml'
  }
);
break;
case "json" :
textFileAsBlob = new Blob([textToWrite], {
  type:
  'application/json'
}
);
break;
default :
console.log("non traite  , extension : "+extension);
break;
}
}


//  console.log(nomFichier+" : "+extension);



var downloadLink = document.createElement("a");
downloadLink.download = fileName;
downloadLink.innerHTML = "Download File";
if (window.URL != null)
{
  // Chrome allows the link to be clicked
  // without actually adding it to the DOM.
  downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
} else
{
  // Firefox requires the link to be added to the DOM
  // before it can be clicked.
  downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
  downloadLink.onclick = this.destroyClickedElement;
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
}

downloadLink.click();
},
destroyClickedElement(event) {
  // remove the link from the DOM
  document.body.removeChild(event.target);
}
}
}
</script>
