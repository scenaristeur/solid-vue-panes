import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )

export default {

  methods: {
    async readFolder(url){
      if( await fc.itemExists( url )) {
        return fc.readFolder(url).then(folder => {
        //  console.log("Folder",folder)
            this.$store.commit('crud/setShapeUrl', this.shape_url)
          return folder
        },
        err => { console.log("erreur for url : ", url,err) })
      }else{
      //  console.log("url does not exist", url)
      }
    }
  }
}
