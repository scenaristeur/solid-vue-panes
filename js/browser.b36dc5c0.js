(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["browser"],{"6d6f":function(e,t,r){},a36b:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"browser"},[null!=e.webId?r("div",[r("b-list-group",["https://"!=e.folder.parent?r("b-list-group-item",{staticClass:"item",on:{click:function(t){return e.updateFolder(e.folder.parent)}}},[r("b-icon-arrow-up"),e._v(" "+e._s(e.folder.url)+" ")],1):r("b-list-group-item",{staticClass:"item"},[e._v(" "+e._s(e.storage)+" ")]),r("div",[r("b-button-toolbar",{attrs:{"aria-label":"Toolbar with button groups and dropdown menu"}},[r("b-button-group",{staticClass:"mx-1"},[r("b-button",{attrs:{title:"New Folder"},on:{click:e.init_folder}},[r("b-icon-folder-plus")],1),r("b-button",{attrs:{title:"Upload Files"},on:{click:function(t){return e.$refs.fileInput.$el.childNodes[0].click()}}},[r("b-icon-files")],1),r("b-button",{attrs:{title:"Upload Folder"},on:{click:function(t){return e.$refs.folderInput.$el.childNodes[0].click()}}},[r("b-icon-folder-symlink")],1)],1)],1),r("b-form-file",{ref:"fileInput",staticStyle:{display:"none"},attrs:{placeholder:"upload files","drop-placeholder":"Drop file here...",multiple:""},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}}),r("b-form-file",{ref:"folderInput",staticStyle:{display:"none"},attrs:{placeholder:"Upload directory","drop-placeholder":"Upoload directory",directory:"",multiple:""},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}})],1),e._l(e.folder.folders,(function(t){return r("b-list-group-item",{key:t.name,staticClass:"item list-group-item d-flex justify-content-between",on:{click:function(r){return e.selected(t)},contextmenu:function(r){return r.preventDefault(),e.right(t)}}},[r("p",{staticClass:"p-0 m-0 flex-grow-1"},[r("b-icon-folder2"),e._v(" "+e._s(t.name))],1),r("b-button",{attrs:{size:"sm mr-2",variant:"outline-primary"}},[r("b-icon-alt",{attrs:{variant:"primary"},on:{click:function(r){return r.stopPropagation(),e.init_move(t)}}})],1),r("b-button",{attrs:{size:"sm",variant:"outline-danger"}},[r("b-icon-trash",{attrs:{variant:"danger"},on:{click:function(r){return r.stopPropagation(),e.init_trash(t)}}})],1)],1)}))],2),r("b-list-group",e._l(e.folder.files,(function(t){return r("b-list-group-item",{key:t.name,staticClass:"item list-group-item d-flex justify-content-between",on:{click:function(r){return e.selected(t)},contextmenu:function(r){return r.preventDefault(),e.right(t)}}},[r("p",{staticClass:"p-0 m-0 flex-grow-1"},[r("b-icon-file-text"),e._v(" "+e._s(t.name))],1),r("b-button",{attrs:{size:"sm mr-2",variant:"outline-primary",disabled:""}},[r("b-icon-download")],1),r("b-button",{attrs:{size:"sm mr-2",variant:"outline-primary"}},[r("b-icon-alt",{attrs:{variant:"primary"},on:{click:function(r){return r.stopPropagation(),e.init_move(t)}}})],1),r("b-button",{attrs:{size:"sm",variant:"outline-danger"}},[r("b-icon-trash",{attrs:{variant:"danger"},on:{click:function(r){return r.stopPropagation(),e.init_trash(t)}}})],1)],1)})),1)],1):r("div",[r("SolidLoginButton")],1),r("b-modal",{attrs:{id:"context-menu",title:e.contextTitle}},[r("b-list-group",[r("b-input-group",{attrs:{prepend:"Rename"}},[r("b-form-input",{model:{value:e.newName,callback:function(t){e.newName=t},expression:"newName"}})],1)],1)],1),r("b-modal",{attrs:{id:"confirm-trash",title:"Trash"},on:{ok:e.trash}},[e._v(" Are you sure you want to delete "),r("b-icon-trash",{attrs:{variant:"danger"}}),r("b",[e._v(e._s(e.currentItem.name))]),e._v(" ("+e._s(e.currentItem.type)+") "),r("b-icon-trash",{attrs:{variant:"danger"}}),e._v(" and all its content ? "),r("br"),r("small",[e._v(" "+e._s(e.currentItem.url)+" ")])],1),r("b-modal",{attrs:{id:"move",title:"Are you sure you want to move or rename"},on:{ok:e.move}},[e._v(" name : "+e._s(e.currentItem.name)+" "),r("br"),r("small",[e._v(" "+e._s(e.currentItem.url)+" ")]),r("b-input-group",{attrs:{size:"sm",prepend:"New location"}},[r("b-form-input",{model:{value:e.new_location,callback:function(t){e.new_location=t},expression:"new_location"}})],1)],1),r("b-modal",{attrs:{id:"folder-modal",title:"New Folder"},on:{ok:e.createFolder}},[r("b-input-group",{attrs:{size:"sm",prepend:"New Folder"}},[r("b-form-input",{model:{value:e.new_folder,callback:function(t){e.new_folder=t},expression:"new_folder"}})],1)],1)],1)},o=[],i=(r("4160"),r("b0c0"),r("d3b7"),r("159b"),r("96cf"),r("1da1")),a=r("93ef"),l=r("00e8"),s=r.n(l),c=window.SolidFileClient,u=new c(s.a),d={name:"Browser",components:{SolidLoginButton:function(){return Promise.all([r.e("chunk-b23e9e3a"),r.e("chunk-bb2f4308")]).then(r.bind(null,"e9a1"))}},data:function(){return{contextTitle:"",currentItem:{},newName:"",new_location:"",new_folder:"",files:[]}},watch:{files:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log(e),n=t.folder.url,console.log(n),r.next=5,e.forEach(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t,r),o=t.webkitRelativePath.length>0?n+t.webkitRelativePath:n+t.name,console.log(o,t,t.type),e.next=5,u.createFile(o,t,t.type);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}());case 5:t.updateFolder(t.folder.url);case 6:case"end":return r.stop()}}),r)})))()}},methods:{selected:function(e){"folder"==e.type?this.$store.dispatch("solid/updateFolder",e.url):this.$store.dispatch("solid/updateFile",e)},init_folder:function(){this.$bvModal.show("folder-modal")},createFolder:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e.new_folder),!(e.new_folder.length>0)){t.next=15;break}return r=e.folder.url+e.new_folder,console.log(r),t.next=6,u.itemExists(r);case 6:if(t.sent){t.next=11;break}return t.next=9,u.createFolder(r);case 9:t.next=12;break;case 11:alert(r+" already exists");case 12:e.updateFolder(e.folder.url),t.next=16;break;case 15:alert("folder name can not be empty");case 16:case"end":return t.stop()}}),t)})))()},right:function(e){console.log("right",e),this.contextTitle=e.name,this.newName=e.name,this.$bvModal.show("context-menu"),this.currentItem=e},init_trash:function(e){console.log(e),this.$bvModal.show("confirm-trash"),this.currentItem=e},init_move:function(e){console.log(e),this.$bvModal.show("move"),this.currentItem=e,this.new_location=e.url},move:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("Move",e.currentItem.type,e.currentItem.url,"to",e.new_location),"folder"!=e.currentItem.type){t.next=6;break}return t.next=4,u.move(e.currentItem.url,e.new_location);case 4:t.next=8;break;case 6:return t.next=8,u.move(e.currentItem.url,e.new_location);case 8:e.updateFolder(e.folder.url);case 9:case"end":return t.stop()}}),t)})))()},trash:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("Trash",e.currentItem.type,e.currentItem.url),"folder"==e.currentItem.type){t.next=7;break}return t.next=4,Object(a["b"])(e.currentItem.url);case 4:console.log("File deleted !"),t.next=9;break;case 7:return t.next=9,u.deleteFolder(e.currentItem.url);case 9:e.updateFolder(e.folder.url);case 10:case"end":return t.stop()}}),t)})))()},updateFolder:function(e){this.$store.dispatch("solid/updateFolder",e)}},computed:{webId:function(){return this.$store.state.solid.webId},storage:function(){return this.$store.state.solid.storage},folder:function(){return this.$store.state.solid.folder}}},f=d,m=(r("f112"),r("2877")),p=Object(m["a"])(f,n,o,!1,null,null,null);t["default"]=p.exports},f112:function(e,t,r){"use strict";var n=r("6d6f"),o=r.n(n);o.a}}]);
//# sourceMappingURL=browser.b36dc5c0.js.map