
export default {
  data() {
    return {
      commandHistory: []
    }
  },
  methods: {
    getInputType(iv){
      var inputObject = {};

      // si commence par http --> type = url
      if (this.isValidUrl(iv)){
        inputObject.type = "url";
        inputObject.value = iv;
        inputObject.isFile = this.isFile(iv)
      }else{
        // selon le premier charactère, on detecte une commande
        let firstChar = iv.charAt(0);
        let last = ""
        switch(firstChar){
          case '/':
          //    let commande = rdf.quad(rdf.blankNode(), rdf.namedNode('commande'),rdf.literal(message))
          //  this.catchCommande(message,this.network,this);

          inputObject.type = "commande";
          inputObject.value = iv;
          inputObject.inputNew = "";
          this.catchCommande(inputObject)
          break;

          case '.':
          last = this.commandHistory[this.commandHistory.length-1];
          inputObject.inputNew = last.s+" "+last.p+" "+last.o;
          break;

          case ';':
          last = this.commandHistory[this.commandHistory.length-1];
          inputObject.inputNew = last.s+" "+last.p+" ";
          break;

          case ',':
          last = this.commandHistory[this.commandHistory.length-1];
          inputObject.inputNew = last.s+" ";
          break;


          default:
          // si le premier charactère n'indique pas une commande, on traite comme un triplet
          inputObject = this.traiteTriplet(iv);
        //  this.catchTriplet(inputObject)
        console.log("TODO is catchTriplet Necessaire ici ?")
        }
      }

      //si termine par virgule, point, point-virgule, tiret --> triplet

      return inputObject;
    },
    traiteTriplet(message){
      var result = {}
      var inputNew = "";
      let lastChar = message.slice(-1);
      let messageCut = message.slice(0,-1).split(" ");
      let isTriplet = true;
      //  console.log(messageCut);

      let detectLiteral = "";
      let messageCutTemp = [];
      messageCut.forEach(function(part){
        part = part.trim();
        //  console.log(part);
        if (part.startsWith('"')){
          detectLiteral ="debut";
          //  console.log(detectLiteral);
          messageCutTemp.push(part.substr(1));
        }else if (part.endsWith('"')){
          detectLiteral = "fin";
          //console.log(detectLiteral);
          messageCutTemp.push(messageCutTemp.pop()+" "+part.slice(0,-1));
        }else if (detectLiteral == "debut"){
          //  console.log("recupere le dernier et lui ajoute part" )
          messageCutTemp.push(messageCutTemp.pop()+" "+part)
        }else {
          messageCutTemp.push(part);
        }
      });
      if (messageCutTemp.length > 0){
        messageCut = messageCutTemp;
      }
      switch(lastChar){
        case '.':
        inputNew = "";
        break;
        case ';':
        if (messageCut[0].indexOf(" ") > -1){
          inputNew = '"'+messageCut[0]+'"'+' ';
        }else{
          inputNew = messageCut[0]+' ';
        }
        break;
        case ',':
        if (messageCut[0].indexOf(" ") > -1){
          inputNew = '"'+messageCut[0]+'" ';
        }else{
          inputNew = messageCut[0]+' ';
        }
        if (messageCut[1].indexOf(" ") > -1){
          inputNew += '"'+messageCut[1]+'" ';
        }else{
          inputNew += messageCut[1]+' ';
        }
        break;
        case '-':
        if (messageCut[2].indexOf(" ") > -1){
          inputNew = '"'+messageCut[2]+'"'+' ';
        }else{
          inputNew = messageCut[2]+' ';
        }
        break;
        default:
        console.log("message to chat "+message)
        //this.sendMessage(message);
        //  this.agentInput.send('agentSocket', {type: "sendMessage", message:message});
        //  this.catchTriplet(message.slice(0,-1), this.network); // A REMPLACER PAR CATCHTRIPLETS V2
        inputNew = "";
        isTriplet = false;
      }
      if (isTriplet){
        //  console.log("est Triplet",messageCut)
        result.type = "triplet";
        var tripletvalue = {};
        tripletvalue.subject = messageCut[0];
        tripletvalue.predicate = messageCut[1];
        tripletvalue.object = messageCut[2];
        result.value = tripletvalue;
        result.inputNew = inputNew;
      }else {
        //  console.log("n'est pas triplet")
        result.type = "message";
        result.value = message;
        result.inputNew = inputNew;
      }

      return result;
    },

    catchTriplet(triplet){
      //  console.log(triplet)
      var subject = triplet.value.subject;
      var predicate = triplet.value.predicate;
      var object = triplet.value.object;
      // console.log(message.length);
      //message=message.trim();
      //var tripletString = message.substring(2).trim().split(" ");
      // les noeuds existent-ils ?
      var sujetNode = this.network.body.data.nodes.get({
        filter: function(node){
          //    console.log(node);
          return (node.label == subject );
        }
      });
      var objetNode = this.network.body.data.nodes.get({
        filter: function(node){
          //    console.log(node);
          return (node.label == object);
        }
      });
      //  console.log(sujetNode);
      //  console.log(objetNode);
      // sinon, on les créé
      if (sujetNode.length == 0){
        var sub_n = {label: subject, color:{
          border : document.getElementById("bordercolorpicker").value ,
          background : document.getElementById("bodycolorpicker").value }
        };
        this.network.body.data.nodes.add(sub_n);
      }
      if (objetNode.length == 0){
        var obj_n = {label: object, color:{
          border : document.getElementById("bordercolorpicker").value ,
          background : document.getElementById("bodycolorpicker").value }
        };
        this.network.body.data.nodes.add(obj_n);
      }
      // maintenant ils doivent exister, pas très po=ropre comme méthode , à revoir
      sujetNode = this.network.body.data.nodes.get({
        filter: function(node){
          return (node.label == subject );
        }
      });
      objetNode = this.network.body.data.nodes.get({
        filter: function(node){
          //  console.log(node);
          return (node.label == object);
        }
      });
      this.network.body.data.edges.add({
        label: predicate,
        from : sujetNode[0].id,
        to : objetNode[0].id,
        color: {inherit:'both'}

      });
      //on récupère ce edge pour l'envoyer au serveur
      var edge = this.network.body.data.edges.get({
        filter: function(edge) {
          return (edge.from == sujetNode[0].id && edge.to == objetNode[0].id && edge.label == predicate);
        }
      });
      console.log("EDGE is necessaire ici ?",edge)
      //  console.log("OK",autofit,autofocus)
      //this.network.fit();
      //  fitAndFocus(sujetNode[0].id);

    },



    catchCommande(commande){
      console.log(commande)
      switch(commande.value) {
        case "/h":
        case "/help":
        case "/aide":
        //console.log(this.$.dialogs)
        console.log("help")
        //  this.$.dialogs.$.helpPopUp.toggle();
        //  this.agentInput.send('agentDialogs', {type:'toggle', popup: 'helpPopUp'})
        break;
        case "/e":
        case "/export":
        case "/exportJson":
        console.log("exportjson")
        //  this.exportJson(this.network)
        //this.exportJson();
        //  this.agentInput.send('agentGraph', {type: 'exportJson'})
        //this.agentInput.send("agentVis", {type: 'exportJson'});
        break;
        case "/t":
        console.log("exportTtl")
        //  this.exportTtl(this.network)
        //  this.exportTtl(this.network,this);
        //  this.agentInput.send('agentGraph', {type:'exportTtl'}); // , what: 'network', to: 'agentDialogs', where: 'inputTextToSave'
        //    this.agentInput.send('agentDialogs', {type:'toggle', popup: 'popupTtl'})
        //  this.agentInput.send("agentVis", {type: 'exportTtl'});
        break;
        case "/i":
        case "/import":
        case "/importJson":
        console.log("import");
        document.getElementById('import-popUp').style.display = 'block';
        break;
        case "/p":
        console.log("save_to_pod");
        document.getElementById('select-pod-popUp').style.display = 'block';
        break;
        case "/a":
        console.log("open editor");
        document.getElementById('editeur-popUp').style.display = 'block';
        /*  const editorDialog = new mdc.dialog.MDCDialog(document.getElementById('editor_dialog'));
        editorDialog.open();*/
        //  document.getElementById('select-pod-popUp').style.display = 'block';
        break;
        case "/r":
        console.log("reglages editor");
        // const reglagesDialog = new mdc.dialog.MDCDialog(document.getElementById('reglages_dialog'));
        // reglagesDialog.open();
        //  document.getElementById('select-pod-popUp').style.display = 'block';
        break;
        case "/n":
        console.log("new graph");
        //  newGraph();
        this.clear()
        //  level < 6? increaseLevel() : "";
        break;
        case "/l":
        console.log("connection a la base levelgraph");
        break;
        case "/c":
        //  console.log("capture_graphe");
        this.downloadCanvas()
        break;
        default:
        console.log("non traite"+ commande);
        //  return afficheCommandes();
      }
    },
    //###############################################################################
    //Sous cette ligne, review de code a faire
    //###############################################################################


    // exportJson(network) {
    //
    //   var nodes_edges = { nodes: network.body.data.nodes.get(), edges: network.body.data.edges.get() };
    //   //  console.log(nodes_edges);
    //   var nodes_edgesJSON = JSON.stringify(nodes_edges);
    //   updateEditorFromNetwork(nodes_edgesJSON)
    //
    // },
    exportTtl(network) {
      /* source https://github.com/scenaristeur/dreamcatcherAutonome/blob/master/autonome/public/agents/ExportAgent.js */
      //  let network = this.network;
      //  var nodes = network.body.data.nodes.get();
      //var edges = network.body.data.edges.get();
      // on ne prend pas le cluster cid=1 correspondant à la navigation pour l'export
      var nodes = network.body.data.nodes.get({
        filter: function (n) {
          return (n.cid != 1);
        }
      });
      var edges = network.body.data.edges.get({
        filter: function (e) {
          return (e.cid != 1);
        }
      });
      console.log("exportation");
      console.log(nodes);
      console.log(edges);
      //creation des statements (triplets)
      /*var statements = [];
      for (var j = 0; j < edges.length; j++){
      var edge = edges[j];
      console.log(edge);
      statements.push({sujet: node.id, propriete: "rdfs:label", objet: node.label});
    }
    console.log(statements);*/

    var output = "@prefix : <http://smag0.blogspot.fr/spoggy#> . \n";
    output += "@prefix owl: <http://www.w3.org/2002/07/owl#> . \n";
    output += "@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> . \n";
    output += "@prefix xml: <http://www.w3.org/XML/1998/namespace> . \n";
    output += "@prefix xsd: <http://www.w3.org/2001/XMLSchema#> . \n";
    output += "@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> . \n";
    output += "@prefix smag: <http://smag0.blogspot.fr/spoggy#> . \n";
    output += "@base <http://smag0.blogspot.fr/spoggy> . \n";
    //output += "<http://smag0.blogspot.fr/spoggy> rdf:type owl:Ontology ;  \n";
    //output += "                    owl:versionIRI <http://smag0.blogspot.fr/spoggy/1.0.0> . \n";
    output += " \n";
    //output += "owl:Class rdfs:subClassOf owl:Thing .  \n";

    var listeInfos = new Array();
    var listeComplementaire = new Array();

    for (var i = 0; i < edges.length; i++) {
      var edge = edges[i];

      var sujet = edge.from;
      var propriete = edge.label.replace(/\s/g, "_");
      var objet = edge.to;


      //string.indexOf(substring) > -1
      //console.log(sujet);
      //console.log(propriete);
      console.log(objet);

      // AJOUTER EVENTUELLEMENT LA RECUPERATION DE SHAPE, COLOR, pour l'export RDF
      var sujetLabel = network.body.data.nodes.get(sujet).label.replace(/\n/g, "");
      try{
        var objetLabel = network.body.data.nodes.get(objet).label.replace(/\n/g, "");
      }catch(error)
      {
        console.error("ERREUR NONTRAITEE")
        console.error(error)

      }

      //console.log("#########################");
      //console.log(sujetLabel);
      //console.log(objetLabel)
      //console.log("#########################");

      var sujetWithPrefix = this.validRdf(network, sujet);
      var proprieteWithPrefix = this.validRdf(network, propriete);
      var objetWithPrefix = this.validRdf(network, objet);

      if (sujetWithPrefix.indexOf(':') == -1) { // ne contient pas de ':'
        sujetWithPrefix = '_:' + sujetWithPrefix; // blanknode
      }

      if (proprieteWithPrefix.indexOf(':') == -1) { // ne contient pas de ':'
        proprieteWithPrefix = ':' + proprieteWithPrefix; // propriete utilisant "@base <http://smag0.blogspot.fr/spoggy>"

      }

      if (objetWithPrefix.indexOf(':') == -1) { // ne contient pas de ':'
        objetWithPrefix = '_:' + objetWithPrefix;  // blanknode
      }


      var typedeProp = ["owl:AnnotationProperty", "owl:ObjectProperty", "owl:DatatypeProperty"];
      var indiceTypeDeProp = 1; // -1 pour ne pas ajouter la prop, sinon par defaut en annotationProperty, 1 pour Object, 2 pour Datatype --> revoir pour les datatypes

      if (
        (proprieteWithPrefix == "type") ||
        (proprieteWithPrefix == ":type") ||
        (proprieteWithPrefix == "rdf:type") ||
        (proprieteWithPrefix == ":a") ||
        (proprieteWithPrefix == ":est_un") ||
        (proprieteWithPrefix == ":est_une") ||
        (proprieteWithPrefix == ":is_a")
      ) {
        proprieteWithPrefix = "rdf:type";
        listeComplementaire.push(objetWithPrefix + " rdf:type owl:Class . \n");
        indiceTypeDeProp = 1;
      } else if ((proprieteWithPrefix == "subClassOf") || (proprieteWithPrefix == ":subClassOf") || (proprieteWithPrefix == "rdfs:subClassOf")) {
        proprieteWithPrefix = "rdfs:subClassOf";
      }
      else if ((proprieteWithPrefix == "sameAs") || (proprieteWithPrefix == ":sameAs")) {
        proprieteWithPrefix = "owl:sameAs";
        indiceTypeDeProp = -1;
      }
      else if (
        (proprieteWithPrefix.toLowerCase() == "ispartof") ||
        (proprieteWithPrefix.toLowerCase() == "partof") ||
        (proprieteWithPrefix.toLowerCase() == ":partof") ||
        (proprieteWithPrefix.toLowerCase() == ":ispartof")) {
          proprieteWithPrefix = "smag:partOf";
          indiceTypeDeProp = 1;
        } else if (
          (proprieteWithPrefix.toLowerCase() == "comment") ||
          (proprieteWithPrefix.toLowerCase() == "commentaire") ||
          (proprieteWithPrefix.toLowerCase() == "//") ||
          (proprieteWithPrefix.toLowerCase() == "#")
        ) {
          proprieteWithPrefix = "rdfs:comment";
          indiceTypeDeProp = -1;
        }
        if (indiceTypeDeProp >= 0) {
          listeComplementaire.push(proprieteWithPrefix + " rdf:type " + typedeProp[indiceTypeDeProp] + " . \n");
        }
        var data = sujetWithPrefix + " " + proprieteWithPrefix + " " + objetWithPrefix + " . \n";
        data += sujetWithPrefix + " " + "rdfs:label \"" + sujetLabel + "\" . \n";
        data += objetWithPrefix + " " + "rdfs:label \"" + objetLabel + "\" . \n";
        listeInfos[i] = data;
        console.log(data);
        console.log("||||||||||||||||||||||--");
      }
      //console.log(listeInfos);
      //console.log(listeComplementaire);
      //suppression des doublons
      listeInfos = this.uniq_fast(listeInfos.sort());
      listeComplementaire = this.uniq_fast(listeComplementaire.sort());
      // console.log (listeInfos);
      for (var k = 0; k < listeInfos.length; k++) {
        output = output + listeInfos[k];
        //  console.log(output);
      }

      for (var l = 0; l < listeComplementaire.length; l++) {
        output = output + listeComplementaire[l];
        //  console.log(output);
      }
      //  updateEditorFromNetworkTtl(output)
      //this.$.dialogs.$.inputTextToSave.value = output; //     document.getElementById("inputTextToSave").value =output;
      /*this.$.dialogs.$.popupTtl.fitInto = this.$.dialogs.$.menu;*/
      //this.$.dialogs.$.popupTtl.toggle();
      //console.log(output)

      //this.agentGraph.send('agentDialogs', {type:'exportTtl', ttlData : output});
    },
    uniq_fast(a) {
      var seen = {};
      var out = [];
      var len = a.length;
      var j = 0;
      for(var i = 0; i < len; i++) {
        var item = a[i];
        if(seen[item] !== 1) {
          seen[item] = 1;
          out[j++] = item;
        }
      }
      return out;
    },

    validRdf(network, string){
      // A REVOIR
      console.log(network.body.data.nodes.get(string));
      console.log("nettoyage "+ string);
      // transformer le noeud en noeud rdf (resource ou literal)
      // ajouter la construction du noeud, son uri, prefix, localname, type...
      var valid = {};
      valid.type = "uri";
      if (string.indexOf(" ") !== -1){
        valid.type = "literal";
      }else{
        /*
        replaceAll(string, " ","_");
        replaceAll(string, "","_");
        replaceAll(string, ",","_");
        replaceAll(string, ";","_");
        replaceAll(string, " ","_");*/
      }

      return string;
    },
    downloadCanvas(){
      // get canvas data
      var srcCanvas = document.getElementById( 'mynetwork' ).childNodes[0].canvas;
      console.log(srcCanvas)
      let  destinationCanvas = document.createElement("canvas");
      destinationCanvas.width = srcCanvas.width;
      destinationCanvas.height = srcCanvas.height;

      let  destCtx = destinationCanvas.getContext('2d');

      //create a rectangle with the desired color
      destCtx.fillStyle = "#FFFFFF";
      destCtx.fillRect(0,0,srcCanvas.width,srcCanvas.height);

      //draw the original canvas onto the destination canvas
      destCtx.drawImage(srcCanvas, 0, 0);

      //finally use the destinationCanvas.toDataURL() method to get the desired output;

      var image =   destinationCanvas.toDataURL(); //canvas.toDataURL("image/png");

      // create temporary link
      var tmpLink = document.createElement( 'a' );
      tmpLink.download = 'image.png'; // set the name of the download file
      tmpLink.href = image;

      // temporarily add link to body and initiate the download
      document.body.appendChild( tmpLink );
      tmpLink.click();
      document.body.removeChild( tmpLink );
    },
    isFile(pathname) {
      return pathname.split('/').pop().indexOf('.') > -1;
    },

    isValidUrl(string){
      try {
        new URL(string);
        return true;
      } catch (_) {
        return false;
      }
    },
    traiteInput(io){
      console.log(io)
      switch(io.type) {
        case "commande":
        //this.catchCommande(message, this.network, this);
        // code block
        break;
        case "triplet":
        // code block
        break;
        case "url":
        // code block
        var params = io;
        params.source = io.value;
        console.log("IMPORTER, see spoggy-simple /js/import-export")
        //  importer(params,updateGraph)
        break;
        default:
        // code block
      }
    }

  }


}
