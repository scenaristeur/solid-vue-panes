(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ee22fdc"],{"07b9":function(e,o,a){"use strict";a.r(o);var t=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"shape-upload"},[a("h5",[e._v(e._s(e.$options.name))]),a("b-form-file",{attrs:{accept:".shex",state:Boolean(e.file),placeholder:"Choose a shex file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:e.file,callback:function(o){e.file=o},expression:"file"}}),a("div",{staticClass:"brute"},[e._v(" currentShape : "+e._s(e.currentShape)+" "),a("hr")])],1)},n=[],l=a("cc75"),r={name:"ShapeUpload",mixins:[l["a"]],components:{},props:{},data:function(){return{file:null}},watch:{file:function(e){console.log(e);var o=new FileReader;o.onload=this.handleFileLoad,o.readAsText(e),console.log("loaded")}},methods:{handleFileLoad:function(e){console.log(e);var o=e.target.result;this.load_raw_schema(o)},handleFileLoad1:function(e){console.log(e),console.log(e.target.result),window.shexLoader.load([e.target.result],[],[],[]).then((function(e){e.schema&&console.log("LOADED",e.schema)}),(function(e){console.log("erreur ",e),alert(e.message)}))}},computed:{currentShape:function(){return this.$store.state.crud.currentShape}}},s=r,c=(a("aa69"),a("2877")),i=Object(c["a"])(s,t,n,!1,null,"0b9de836",null);o["default"]=i.exports},aa69:function(e,o,a){"use strict";var t=a("d635"),n=a.n(t);n.a},d635:function(e,o,a){}}]);
//# sourceMappingURL=chunk-5ee22fdc.56a41198.js.map