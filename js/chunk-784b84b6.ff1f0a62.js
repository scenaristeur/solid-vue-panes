(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-784b84b6"],{"07b9":function(e,o,t){"use strict";t.r(o);var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"shape-upload"},[t("h5",[e._v(e._s(e.$options.name))]),t("b-form-file",{attrs:{accept:".shex",state:Boolean(e.file),placeholder:"Choose a shex file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:e.file,callback:function(o){e.file=o},expression:"file"}}),t("div",{staticClass:"brute"},[e._v(" currentShape : "+e._s(e.currentShape)+" "),t("hr")])],1)},a=[],l=t("cc75"),r={name:"ShapeUpload",mixins:[l["a"]],components:{},props:{},data:function(){return{file:null}},watch:{file:function(e){console.log(e);var o=new FileReader;o.onload=this.handleFileLoad,o.readAsText(e),console.log("loaded")}},methods:{handleFileLoad:function(e){console.log(e);var o=e.target.result;this.load_raw_schema(o)},handleFileLoad1:function(e){console.log(e),console.log(e.target.result),window.shexLoader.load([e.target.result],[],[],[]).then((function(e){e.schema&&console.log("LOADED",e.schema)}),(function(e){console.log("erreur ",e),alert(e.message)}))}},computed:{currentShape:function(){return this.$store.state.crud.currentShape}}},s=r,c=(t("3fdf"),t("2877")),i=Object(c["a"])(s,n,a,!1,null,"fa2e5708",null);o["default"]=i.exports},"3fdf":function(e,o,t){"use strict";t("6402")},6402:function(e,o,t){}}]);
//# sourceMappingURL=chunk-784b84b6.ff1f0a62.js.map