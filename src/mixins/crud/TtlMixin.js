import UtilMixin from '@/mixins/crud/UtilMixin.js'

export default {
  mixins: [ UtilMixin],
  methods: {
    buildTtl(ttlData){
      console.log(ttlData)
      var ttlString = "@prefix : <#>.\n"
      //  +  "@prefix : <https://holacratie.solid.community/public/> .\n"
      +  "@prefix owl: <http://www.w3.org/2002/07/owl#> .\n"
      +  "@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n"
      +  "@prefix xml: <http://www.w3.org/XML/1998/namespace> .\n"
      +  "@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n"
      +  "@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n"
      +  "@prefix purl: <http://purl.org/dc/elements/1.1/>.\n"
      +  "@base <"+ttlData.shape+"> .\n\n\n";



    /*  for (let [shape, data] of Object.entries(data)) {
        console.log(shape, data);*/

        //  console.log(this.formData)
        //  console.log("id" , this.shape.url)
        var id = ttlData.shape
        /*  this.formData[id].forEach(function(enreg){
        if (enreg.submitted == undefined) {*/
        var randomName = '_' + Math.random().toString(36).substr(2, 9);
        var filename = randomName
        //  var ttlString = app.ttlBase

        for (let [predicate, object] of Object.entries(ttlData.form)) {
          console.log(predicate, object)
          if( object != undefined && object.length > 0){
            console.log("1")
            if ((predicate == "https://schema.org/name") &&  (object.length > 0)){
              console.log("2")
              var underName  = object.split(' ').join('_');
              filename = underName;
              ttlString += ':this  rdfs:label  "'+object+'".\n'
              ttlString += ':this  purl:title  "'+object+'".\n'
            }
            console.log("3")
            console.log(predicate, object);
          object = object.startsWith("http") ? '<'+object+'>': '"'+object+'"';
            object = object.replace(/\n/gm,'#xA '); // retour a la ligne , new line #xD = carriage return https://www.w3.org/TR/turtle/

            ttlString += ':this  <'+predicate+'>  '+object+'. \n' // # Format :'+object.type+ " "+object.format+ "\n";
          }
        }
        ttlString += ':this  rdf:type  <'+ttlData.shape+'>.'

        const d = new Date();
        var now = d.toUTCString()+"\n";
        ttlString += "\n\n# shexy made with "+id+"\n";
        ttlString += "# from "+location.protocol + '//' + location.host + location.pathname+"\n";
        ttlString += "# at "+now+"\n";
        ttlString += "# by "+ttlData.webId+"\n";
        ttlString += "# source https://github.com/scenaristeur/shighl-vuejs\n";

        /*if (app.anonyme == false){
        ttlString  += "# by "+this.shadowRoot.getElementById("solid-session").textContent+"\n";
      }*/
      console.log(ttlString)
      filename = filename+'/index.ttl#this'

      /* commenter POUR DEBUG */
      return { filename: filename , content: ttlString, ttlData: ttlData}



    }

    //  this.agent.send("SolidWrite", {action: "ttlChanged", ttl: this.ttl})
  }

}
