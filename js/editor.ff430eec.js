(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["editor"],{"0871":function(t,e,n){"use strict";var i=n("79b6"),a=n.n(i);a.a},"44e7":function(t,e,n){var i=n("861d"),a=n("c6b6"),o=n("b622"),s=o("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==a(t))}},"527c":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor"},[null!=t.webId?n("div",[n("div",[n("b-button-toolbar",{attrs:{"aria-label":"Toolbar with button groups and dropdown menu"}},[n("b-button-group",{staticClass:"mr-1",attrs:{size:"sm"}},[n("b-button",{attrs:{size:"sm"},on:{click:t.clean}},[t._v("New")]),n("b-button",{attrs:{size:"sm",disabled:""}},[t._v("Edit")]),n("b-button",{attrs:{size:"sm",disabled:""}},[t._v("Undo")])],1),n("b-dropdown",{staticClass:"mr-1",attrs:{size:"sm",right:"",text:"menu"}},[n("b-dropdown-item",{attrs:{size:"sm"}},[t._v("Item 1")]),n("b-dropdown-item",{attrs:{size:"sm"}},[t._v("Item 2")]),n("b-dropdown-item",{attrs:{size:"sm"}},[t._v("Item 3")])],1),n("b-button-group",{staticClass:"mr-1",attrs:{size:"sm"}},[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{size:"sm",variant:"warning"}},[t._v("Save")]),n("b-modal",{attrs:{id:"modal-1",title:"Save"},on:{show:t.fill,ok:t.save}},[n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Path:","label-align-sm":"right","label-for":"path"}},[n("b-form-input",{attrs:{id:"path"},model:{value:t.path,callback:function(e){t.path=e},expression:"path"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Filename:","label-align-sm":"right","label-for":"name"}},[n("b-form-input",{attrs:{id:"name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Mimetype:","label-align-sm":"right",placeholder:"text/plain ? text/turtle ? application/json ?","label-for":"type"}},[n("b-form-input",{attrs:{id:"type"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1)],1)],1)],1)],1),n("div",[n("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"15"},on:{change:t.change,input:t.input},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)]):n("div",[n("SolidLogin")],1)])},a=[],o=(n("b0c0"),n("d3b7"),n("8a79"),n("96cf"),n("1da1")),s={name:"Browser",components:{SolidLogin:function(){return Promise.resolve().then(n.bind(null,"6bae"))}},data:function(){return{name:"",type:"",path:""}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.name="new_file.txt",t.type="text/plain",t.path=t.storage;case 3:case"end":return e.stop()}}),e)})))()},methods:{clean:function(){this.text="";var t={name:"new_file.txt",type:"text/plain",parent:this.folder.url||this.storage};this.$store.commit("solid/setFile",t),this.$store.commit("solid/setContent","")},change:function(t){console.log("change",t)},input:function(t){console.log("input",t)},fill:function(){this.name=this.file.name,this.type=this.file.type,this.path=this.file.parent},save:function(){console.log("text",this.text),this.path=this.path.endsWith("/")?this.path:this.path+"/",console.log("File",this.type,this.path,this.name);var t={path:this.path,name:this.name,content:this.text,contentType:this.type};this.$store.dispatch("solid/writeFile",t)}},computed:{webId:function(){return this.$store.state.solid.webId},storage:function(){return this.$store.state.solid.storage},folder:function(){return this.$store.state.solid.folder},file:function(){return this.$store.state.solid.file},text:{get:function(){return this.$store.state.solid.content},set:function(t){return this.$store.commit("solid/setContent",t)}}},watch:{}},r=s,l=(n("0871"),n("2877")),c=Object(l["a"])(r,i,a,!1,null,null,null);e["default"]=c.exports},"5a34":function(t,e,n){var i=n("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},"79b6":function(t,e,n){},"8a79":function(t,e,n){"use strict";var i=n("23e7"),a=n("06cf").f,o=n("50c4"),s=n("5a34"),r=n("1d80"),l=n("ab13"),c=n("c430"),u="".endsWith,d=Math.min,h=l("endsWith"),m=!c&&!h&&!!function(){var t=a(String.prototype,"endsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!m&&!h},{endsWith:function(t){var e=String(r(this));s(t);var n=arguments.length>1?arguments[1]:void 0,i=o(e.length),a=void 0===n?i:d(o(n),i),l=String(t);return u?u.call(e,l,a):e.slice(a-l.length,a)===l}})},ab13:function(t,e,n){var i=n("b622"),a=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[a]=!1,"/./"[t](e)}catch(i){}}return!1}}}]);
//# sourceMappingURL=editor.ff430eec.js.map