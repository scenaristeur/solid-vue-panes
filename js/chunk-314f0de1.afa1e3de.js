(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-314f0de1"],{"550c":function(e,t,o){"use strict";o("82a5")},8203:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"groups-view"},[o("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[o("b-input-group-text",[e._v("Name")])]},proxy:!0}])},[o("b-form-input",{model:{value:e.group.name,callback:function(t){e.$set(e.group,"name",t)},expression:"group.name"}})],1),o("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[o("b-input-group-text",[e._v("Purpose")])]},proxy:!0}])},[o("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6"},model:{value:e.group.purpose,callback:function(t){e.$set(e.group,"purpose",t)},expression:"group.purpose"}})],1),o("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[o("b-input-group-text",[e._v("SubGroupOf")])]},proxy:!0}])},[o("b-form-select",{attrs:{options:e.options},model:{value:e.group.parent,callback:function(t){e.$set(e.group,"parent",t)},expression:"group.parent"}})],1),o("b-button",{on:{click:e.save}},[e._v("Save")])],1)},n=[],s=(o("4160"),o("b0c0"),o("ac1f"),o("5319"),o("498a"),o("159b"),o("96cf"),o("1da1")),a=o("4d8d"),u=o("6dc1"),p=o("00e8"),i=o.n(p),c=o("7fed"),d=o.n(c),l=o("fd2a"),g=new d.a(i.a),f={name:"GroupEdit",mixins:[l["a"]],components:{},data:function(){return{group:{},options:[]}},created:function(){this.webId=this.$store.state.solid.webId,this.groups=this.$store.state.gouvernance.groups},watch:{groups:function(e){console.log(e),this.setOptions()}},methods:{save:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var o,r,n,s,p,i,c,d,l,f,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.group,e.$store.state.crud.workspace),o=e.$store.state.crud.workspace+"Group/",r=e.group.name.trim(),n=r.replace(/\s/g,"_"),console.log(r,o),s=new Date,p=s.toISOString(),i=o+n+"/index.ttl",console.log(i),t.prev=9,t.next=12,Object(a["b"])(i);case 12:c=t.sent,t.next=20;break;case 15:return t.prev=15,t.t0=t["catch"](9),t.next=19,Object(a["a"])(i);case 19:c=t.sent;case 20:return d=c.addSubject({identifier:"this"}),d.addLiteral(u["i"].fn,r),d.addNodeRef(u["c"].inbox,"./"+n+"/inbox/"),d.addLiteral(u["a"].created,p),d.addNodeRef(u["b"].maker,e.webId),d.addNodeRef(u["d"].type,u["i"].Group),d.addLiteral(u["e"].label,r),d.addNodeRef(u["i"].hasMember,e.webId),d.addNodeRef(u["i"].hasMember,"https://spoggy-test4.solidcommunity.net/profile/card#me"),d.addNodeRef(u["i"].hasMember,"https://spoggy-test5.solidcommunity.net/profile/card#me"),d.addNodeRef(u["i"].hasMember,"https://spoggy.solidcommunity.net/profile/card#me"),d.addNodeRef("http://www.w3.org/ns/org#purpose","http://www.w3.org/ns/org#Organization"),d.addLiteral("http://www.w3.org/ns/org#purpose",e.group.purpose),t.prev=33,t.next=36,c.save();case 36:e.makeToast("Group created",i,"success"),t.next=42;break;case 39:t.prev=39,t.t1=t["catch"](33),e.makeToast("Group creation error",i+t.t1,"danger");case 42:if(void 0==e.group.parent){t.next=59;break}return t.prev=43,l=e.group.parent+"index.ttl",d.addNodeRef("http://www.w3.org/ns/org#subOrganizationOf",l),t.next=48,Object(a["b"])(l);case 48:return f=t.sent,b=f.getSubject(l+"#this"),b.addNodeRef("http://www.w3.org/ns/org#hasSubOrganization",i),t.next=53,f.save();case 53:e.makeToast("Parent updated",l,"success"),t.next=59;break;case 56:t.prev=56,t.t2=t["catch"](43),e.makeToast("Parent update error",parent+t.t2,"danger");case 59:return e.group={},t.next=62,g.readFolder(o);case 62:e.folder=t.sent,console.log("FOLDER",e.folder),e.$store.commit("gouvernance/setGroups",e.folder);case 65:case"end":return t.stop()}}),t,null,[[9,15],[33,39],[43,56]])})))()},setOptions:function(){var e=this;this.options=[],this.groups.folders.forEach((function(t){e.options.push({value:t.url,text:decodeURI(t.name)})}))}},computed:{groups:{get:function(){return this.$store.state.gouvernance.groups},set:function(){}},webId:{get:function(){return this.$store.state.solid.webId},set:function(){}}}},b=f,m=(o("550c"),o("2877")),h=Object(m["a"])(b,r,n,!1,null,null,null);t["default"]=h.exports},"82a5":function(e,t,o){},fd2a:function(e,t,o){"use strict";t["a"]={methods:{makeToast:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:o,solid:!0})}}}}}]);
//# sourceMappingURL=chunk-314f0de1.afa1e3de.js.map