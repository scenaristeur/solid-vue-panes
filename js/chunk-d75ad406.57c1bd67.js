(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d75ad406"],{"7c6e":function(e,t,r){"use strict";r("96cf");var n=r("1da1"),a=r("00e8"),o=r.n(a),s=r("7fed"),c=r.n(s),i=new c.a(o.a);t["a"]={methods:{readFolder:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,i.itemExists(e);case 2:if(!r.sent){r.next=6;break}return r.abrupt("return",i.readFolder(e).then((function(e){return t.$store.commit("crud/setShapeUrl",t.shape_url),e}),(function(t){console.log("erreur for url : ",e,t)})));case 6:case"end":return r.stop()}}),r)})))()}}}},a7f7:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-submit container"},[r("div",{staticClass:"mt-3"},[e._v(" "+e._s(e.message)+" "),e._v(" Workspace : "+e._s(e.workspace)),r("br"),r("b-button",{attrs:{variant:"warning"},on:{click:e.download}},[e._v("Download")]),r("b-button",{attrs:{variant:"info"},on:{click:e.save}},[e._v("Stream that Activity")]),r("b-button",{attrs:{variant:"success"},on:{click:e.saveWorkspace}},[e._v("Save on Workspace")]),r("b-button",{attrs:{variant:"success",disabled:""},on:{click:e.savePod}},[e._v("Save on my POD (public/shighltest) Add me to your trusted apps")]),r("b-button",{attrs:{variant:"success"},on:{click:e.savePublic}},[e._v("Save on holacratie Pod")])],1),r("ul",[r("li",[r("a",{attrs:{href:e.currentShape,target:"blank"}},[e._v("currentShape")])]),r("li",[r("a",{attrs:{href:e.webId,target:"blank"}},[e._v(e._s(e.webId))])]),r("li",[r("a",{attrs:{href:e.storage,target:"blank"}},[e._v(e._s(e.storage))])])])])},a=[],o=(r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("96cf"),r("1da1")),s=r("ae85"),c=(r("a15b"),r("4fad"),r("ac1f"),r("25f0"),r("5319"),r("1276"),r("2ca0"),r("3835")),i={mixins:[s["a"]],methods:{buildTtl:function(e){console.log(e);for(var t="@prefix : <#>.\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix xml: <http://www.w3.org/XML/1998/namespace> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix purl: <http://purl.org/dc/elements/1.1/>.\n@base <"+e.shape+"> .\n\n\n",r="_"+Math.random().toString(36).substr(2,9),n=r,a=0,o=Object.entries(e.form);a<o.length;a++){var s=Object(c["a"])(o[a],2),i=s[0],l=s[1];if(console.log(i,l),void 0!=l&&l.length>0){if(console.log("1"),"https://schema.org/name"==i&&l.length>0){console.log("2");var u=l.split(" ").join("_");n=u,t+=':this  rdfs:label  "'+l+'".\n',t+=':this  purl:title  "'+l+'".\n'}console.log("3"),console.log(i,l),l=l.startsWith("http")?"<"+l+">":'"'+l+'"',l=l.replace(/\n/gm,"#xA "),t+=":this  <"+i+">  "+l+". \n"}}t+=":this  rdf:type  <"+e.shape+">.";var h=this.$store.state.crud.shape;return console.log("CRUD SHAPE",h),console.log(t),n=n+"/"+n+".ttl#this",{filename:n,content:t,ttlData:e}}}},l=r("7c6e"),u=r("00e8"),h=r.n(u),d=r("7fed"),p=r.n(d),f=new p.a(h.a),g={name:"FormSubmit",mixins:[s["a"],i,l["a"]],components:{},props:{attribut:String},created:function(){this.workspace=this.$store.state.crud.workspace},data:function(){return{message:""}},computed:{webId:function(){return this.$store.state.crud.webId},currentShape:function(){return this.$store.state.crud.currentShape},storage:function(){return this.$store.state.crud.storage},workspace:{get:function(){return this.$store.state.crud.workspace},set:function(){}}},methods:{save:function(){console.log("CurrentShape",this.currentShape),console.log("data",this.$store.state.crud.formData),console.log(this.$store.state.crud.formData[this.currentShape]);var e=this.$store.state.crud.formData[this.currentShape],t=this.streamActivity(this.webId,e);console.log(t),this.saveFile(t)},savePublic:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.$store.state.crud.formData[e.currentShape],n={form:r,shape:e.currentShape,author:e.webId},a=e.buildTtl(n),console.log("TTL",a),o=a.ttlData.shape+"/"+a.filename,console.log(o),t.next=8,f.createFile(o,a.content,"text/turtle").then((function(t){console.log(t),console.log(t.url),e.message=(new Date).toLocaleTimeString()+" : Saved at "+t.url,alert(e.message)}),(function(t){console.log(t),e.message=(new Date).toLocaleTimeString()+" : "+t+" It seems there is an issue to store on Holocratie POD ?",alert(e.message)}));case 8:case"end":return t.stop()}}),t)})))()},saveWorkspace:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.$store.state.crud.formData[e.currentShape],n={form:r,shape:e.currentShape,author:e.webId},a=e.buildTtl(n),console.log("TTL",a),o=e.workspace+e.localname(e.currentShape)+"/"+a.filename,console.log(o),t.next=8,f.createFile(o,a.content,"text/turtle").then((function(t){console.log(t),console.log(t.url),e.message=(new Date).toLocaleTimeString()+" : Saved at "+t.url,alert(e.message)}),(function(t){console.log(t),e.message=(new Date).toLocaleTimeString()+" : "+t+" Are you sure you are logged to your pod and you have allowed this app to write on ?",alert(e.message)}));case 8:case"end":return t.stop()}}),t)})))()},savePod:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.$store.state.crud.formData[e.currentShape],n={form:r,shape:e.currentShape,author:e.webId},a=e.buildTtl(n),o=e.storage+"public/shighltest/"+e.localname(e.currentShape)+"/"+a.filename,t.next=6,f.createFile(o,a.content,"text/turtle").then((function(t){console.log(t),console.log(t.url),e.message=(new Date).toLocaleTimeString()+" : Saved at "+t.url,alert(e.message)}),(function(t){console.log(t),e.message=(new Date).toLocaleTimeString()+" : "+t+" Are you sure you are logged to your pod and you have allowed this app to write on ?",alert(e.message)}));case 6:case"end":return t.stop()}}),t)})))()},download:function(){var e=this.$store.state.crud.formData[this.currentShape];e["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"]=this.currentShape,console.log("DATA TO CREATE",e),this.saveFile(e)},saveFile:function(e){var t=this.localname(this.currentShape),r="json",n=JSON.stringify(e,void 0,2),a="";if(console.log(e),"undefined"!=typeof r&&r.length>0)switch(r){case"ttl":a=new Blob([n],{type:"text/turtle"});break;case"rdf":a=new Blob([n],{type:"application/rdf+xml"});break;case"json":a=new Blob([n],{type:"application/json"});break;default:console.log("non traite  , extension : "+r);break}var o=document.createElement("a");o.download=t,o.innerHTML="Download File",null!=window.URL?o.href=window.URL.createObjectURL(a):(o.href=window.URL.createObjectURL(a),o.onclick=this.destroyClickedElement,o.style.display="none",document.body.appendChild(o)),o.click()},destroyClickedElement:function(e){document.body.removeChild(e.target)}}},m=g,w=r("2877"),b=Object(w["a"])(m,n,a,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-d75ad406.57c1bd67.js.map