(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["editor","chunk-7a707267"],{"0871":function(t,e,n){"use strict";var a=n("79b6"),i=n.n(a);i.a},"44e7":function(t,e,n){var a=n("861d"),i=n("c6b6"),r=n("b622"),s=r("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==i(t))}},"527c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor"},[null!=t.webId?n("div",[n("div",[n("b-button-toolbar",{attrs:{"aria-label":"Toolbar with button groups and dropdown menu"}},[n("b-button-group",{staticClass:"mr-1",attrs:{size:"sm"}},[n("b-button",{attrs:{size:"sm"},on:{click:t.clean}},[t._v("New")]),n("b-button",{attrs:{size:"sm",disabled:""}},[t._v("Edit")]),n("b-button",{attrs:{size:"sm",disabled:""}},[t._v("Undo")])],1),n("b-dropdown",{staticClass:"mr-1",attrs:{size:"sm",right:"",text:"menu"}},[n("b-dropdown-item",{attrs:{size:"sm"}},[t._v("Item 1")]),n("b-dropdown-item",{attrs:{size:"sm"}},[t._v("Item 2")]),n("b-dropdown-item",{attrs:{size:"sm"}},[t._v("Item 3")])],1),n("b-button-group",{staticClass:"mr-1",attrs:{size:"sm"}},[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{size:"sm",variant:"warning"}},[t._v("Save")]),n("b-modal",{attrs:{id:"modal-1",title:"Save"},on:{show:t.fill,ok:t.save}},[n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Path:","label-align-sm":"right","label-for":"path"}},[n("b-form-input",{attrs:{id:"path"},model:{value:t.path,callback:function(e){t.path=e},expression:"path"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Filename:","label-align-sm":"right","label-for":"name"}},[n("b-form-input",{attrs:{id:"name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Mimetype:","label-align-sm":"right",placeholder:"text/plain ? text/turtle ? application/json ?","label-for":"type"}},[n("b-form-input",{attrs:{id:"type"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1)],1)],1)],1)],1),n("div",[n("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"15"},on:{change:t.change,input:t.input},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)]):n("div",[n("SolidLogin")],1)])},i=[],r=(n("b0c0"),n("d3b7"),n("8a79"),n("96cf"),n("1da1")),s={name:"Editor",components:{SolidLogin:function(){return Promise.resolve().then(n.bind(null,"6bae"))}},data:function(){return{name:"",type:"",path:""}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.name="new_file.txt",t.type="text/plain",t.path=t.storage;case 3:case"end":return e.stop()}}),e)})))()},methods:{clean:function(){this.text="";var t={name:"new_file.txt",type:"text/plain",parent:this.folder.url||this.storage};this.$store.commit("solid/setFile",t),this.$store.commit("solid/setContent","")},change:function(t){console.log("change",t)},input:function(t){console.log("input",t)},fill:function(){this.name=this.file.name,this.type=this.file.type,this.path=this.file.parent},save:function(){console.log("text",this.text),this.path=this.path.endsWith("/")?this.path:this.path+"/",console.log("File",this.type,this.path,this.name);var t={path:this.path,name:this.name,content:this.text,contentType:this.type};this.$store.dispatch("solid/writeFile",t)}},computed:{webId:function(){return this.$store.state.solid.webId},storage:function(){return this.$store.state.solid.storage},folder:function(){return this.$store.state.solid.folder},file:function(){return this.$store.state.solid.file},text:{get:function(){return this.$store.state.solid.content},set:function(t){return this.$store.commit("solid/setContent",t)}}},watch:{}},o=s,l=(n("0871"),n("2877")),c=Object(l["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},"5a34":function(t,e,n){var a=n("44e7");t.exports=function(t){if(a(t))throw TypeError("The method doesn't accept regular expressions");return t}},"79b6":function(t,e,n){},"8a79":function(t,e,n){"use strict";var a=n("23e7"),i=n("06cf").f,r=n("50c4"),s=n("5a34"),o=n("1d80"),l=n("ab13"),c=n("c430"),u="".endsWith,d=Math.min,h=l("endsWith"),m=!c&&!h&&!!function(){var t=i(String.prototype,"endsWith");return t&&!t.writable}();a({target:"String",proto:!0,forced:!m&&!h},{endsWith:function(t){var e=String(o(this));s(t);var n=arguments.length>1?arguments[1]:void 0,a=r(e.length),i=void 0===n?a:d(r(n),a),l=String(t);return u?u.call(e,l,i):e.slice(i-l.length,i)===l}})},ab13:function(t,e,n){var a=n("b622"),i=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(a){}}return!1}},d200:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modele"},[n("h1",[t._v("This is an agora page")])])}],r={name:"Agora"},s=r,o=n("2877"),l=Object(o["a"])(s,a,i,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=editor.1bfca3dc.js.map