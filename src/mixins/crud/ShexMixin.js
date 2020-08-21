import UtilMixin from '@/mixins/crud/UtilMixin.js'
export default {
  mixins: [ UtilMixin],
  methods: {
    async load_raw_schema(content){
      const parser = window.shexParser.construct('http://example.com/base/url/')
      console.log(parser)
      console.warn(parser.parse(content), null, 2)
      let schema = parser.parse(content)
      this.$store.commit('crud/setSchema',schema)
      //app.schema = JSON.stringify(loaded.schema);
      this.splitSchema(schema)
    },
    async load_remote_schema(shape_url){
      let app = this
      window.shexLoader.load([shape_url], [], [], []).then(loaded => {
        if (loaded.schema){
          console.log("LOADED",loaded.schema)
          this.$store.commit('crud/setSchema',loaded.schema)
          //app.schema = JSON.stringify(loaded.schema);
          app.splitSchema(loaded.schema)
        }
      }, err => {
        console.log("erreur ",err)
        alert(err.message)
        //  app.currentShape.id = err.message
      }
    );
    console.log("loaded")
  },
  async splitSchema(schema){
    var app = this;
    this.shapes = []
    this.footprint_shapes = []
    this.translate_shapes = []
    schema.shapes.forEach((shape) => {
      shape.localname = this.localname(shape.id)
      if(shape.id.endsWith("_Footprint")){
        shape.use = "footprint"
        this.footprint_shapes.push(shape)
      } else if(shape.id.endsWith("_Translate")){
        shape.use = "translate"
        app.translate_shapes.push(shape)
      }  else {
        shape.use = "regular"
        app.shapes.push(shape)
      }
    });
    this.currentShape = this.shapes[0].id
    this.$store.commit('crud/setCurrentShape', this.shapes[0].id)
    /*this.rootElement = document.getElementById(this.root)
    console.log("ROOT Element",this.rootElement)
    this.initRootElement()*/
    /*  this.shapes.forEach((shape) => {
    this.initShape(shape)
  });*/

  console.log("SHAPES",this.shapes)
  console.log("FOOTPRINT_SHAPES",this.footprint_shapes)
  console.log("TRANSLATE_SHAPES",this.translate_shapes)
  this.$store.commit('crud/setShapes', this.shapes)
  this.$store.commit('crud/setFShapes', this.footprint_shapes)
  this.$store.commit('crud/setTShapes', this.translate_shapes)
}
}
}
