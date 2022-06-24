import { sioc, dct, foaf, schema } from 'rdf-namespaces'

export default {
  methods: {
    async prepareToday(){
      let now = new Date()
      this.$store.commit('parle/setDataDate', now)
      let filename = [now.getFullYear(), ("0" + (now.getMonth() + 1)).slice(-2), ("0" + now.getDate()).slice(-2)].join("-")+".ttl"
      let fileUrl = this.$store.state.parle.root+filename
      await this.create(fileUrl)
      this.$store.commit('parle/setFileUrl', fileUrl)

    },
    async create(fileUrl){
      if( !await this.$fc.itemExists( fileUrl )) {
        await this.$fc.postFile(fileUrl, "", "text/turtle")
        .then((content) => {
          console.log("File Created",content)
        })
        .catch(err => console.error(`Error: ${err}`))
      }else{
        console.log("File exist",fileUrl)
      }
    },
    bascule(p){
      console.log("BASCULE",p)
      this.$store.commit('parle/setFileUrl', p)
      this.path = p.substr(0, p.lastIndexOf("/") + 1)
      if (this.$store.state.websocket.socket != undefined){
        console.log("TODO : subscribe")
      //  this.$store.state.websocket.socket.send('sub '+p);
      }
      this.makeToast('We have switched to',p,'info')
      this.getMessages(p)
    },
    async getMessages(uri){
      console.log("URI",uri)
      let messages = []
      if( !await this.$fc.itemExists( uri )) {
        await this.$fc.postFile(uri, "", "text/turtle")
        .then((content) => {
          console.log("File Created",content)
        })
        .catch(err => console.error(`Error: ${err}`))
      }else{
        console.log("File exist",uri)
      }
      if (this.$store.state.websocket.socket != undefined){
        this.$store.state.websocket.socket.send('sub '+uri);
      }
      const chatDoc = await this.$fc.readFile(uri);
      //  console.log(chatDoc)
      /*  let triples = chatDoc.getTriples()
      console.log(triples)
      //  this.messages = {}
      triples.forEach((t, i) => {
      !Object.prototype.hasOwnProperty.call(this.messages, t.subject.id) ? this.messages[t.subject.id] = {} : "";
      this.messages[t.subject.id][t.predicate.id] = t.object.id

    });
    console.log(this.messages)*/
    let  subjects = chatDoc.findSubjects();
    subjects = subjects.filter( this.onlyUnique )
    //    console.log(subjects)
    let triples = []
    subjects.forEach((s) => {
      //  console.log(s)
      //  let t = s.getTriples()
      let created = s.getString(dct.created)
      let content = s.getLiteral(sioc.content)
      let maker = s.getNodeRef(foaf.maker)
      let parts = s.getAllNodeRefs(schema.hasPart)
      let parent = s.getNodeRef(schema.isPartOf)
      let t={id:s.asRef(),
        created: new Date(created).toLocaleTimeString(),
        content: content,
        maker: maker,
        parts: parts,
        parent: parent
      }
      //  console.log(t)
      triples.push(t)

    });
    //  console.log(triples)
    messages = triples.reverse()
    console.log("Messages",messages)
    this.$store.commit('parle/setMessages',messages)
  },
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
}
}
