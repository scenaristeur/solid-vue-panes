<template>
  <div class="modele-view">
    <!--  <Component /> -->
    <div id="canvas"></div>
  </div>
</template>

<script>
import P5 from 'p5'
//import {  fetchDocument } from 'tripledoc';
//import {  rdf} from 'rdf-namespaces'
//import ToastMixin from '@/mixins/ToastMixin'

export default {
  name: 'ModeleView',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
//  mixins: [ToastMixin],
props:['value'],
data() {
  return {
    //
  }
},
created() {
  const sketch = s => {
    let w = window.innerWidth;
    let h = window.innerHeight;
    let canv = {};
    let r = 255
    let g = 255
    console.log(canv)

    s.setup = () => {
      canv  = s.createCanvas(w, h);
      canv.position(0,0)
    };

    s.draw = () => {
      s.background(33, 33, 33);
      r = s.mouseX * 255 / w
      g = s.mouseY * 255 / h
      s.fill(r, g,255)
      s.ellipse(s.mouseX, s.mouseY, 100, 100);

      // call your method:
      //  s.yourMethod(s.mouseX, s.mouseY);
    };

    // create methods:
    s.yourMethod = (x, y) => {
      // your method
      console.log(x,y)
    }
  }

  let canvas = new P5(sketch, 'canvas');
  console.log(canvas)

},
methods: {
  /*async getData() {
  let dataDoc = await fetchDocument(this.url);
  let subj = dataDoc.getSubject(this.url+"#this")
  console.log(subj)
  let types = subj.getAllRefs(rdf.type)
  console.log(types)
}*/
},

watch:{
  /*'$route' (to) {
  //  '$route' (to, from) {
  console.log(to)
},
url(url){
console.log("URL CHANGE",url)
}*/
},
computed:{
  /*storage: {
  get: function() { return this.$store.state.solid.storage},
  set: function() {}
},*/
},
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
