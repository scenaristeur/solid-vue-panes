export default {
  methods: {
    localname(uri){
      var ln = uri;
      //  console.log("URI",uri)
      if(uri!= undefined){
        if ( uri.lastIndexOf("#") != -1) {
          ln = uri.substr(uri.lastIndexOf("#")).substr(1)
        }else{
          ln = uri.substr(uri.lastIndexOf("/")).substr(1)
        }
        ln = ln.length == 0 ? uri : ln 
      }
      return ln
    },
    today(){
      var local = new Date();
      local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
      return local.toJSON().slice(0,10);
    },
    streamActivity(webId, data){
      let as =  {
        "@context": "https://www.w3.org/ns/activitystreams",
        "summary": "User fill a form with shighl-vuejs",
        "type": "Add",
        "published": new Date().toISOString(),
        "actor": {
          "type": "Person",
          "id": webId,
          "name": "UserName",
          "url": "same as webid ?",
          "image": {
            "type": "Link",
            "href": "http://example.org/martin/image.jpg",
            "mediaType": "image/jpeg"
          }},
          "object" : {
            "id": "http://www.test.example/blog/abc123/xyz",
            "type": "Document",
            "url": "http://example.org/blog/2011/02/entry",
            "name": "Why I love Activity Streams",
            "content": data,
          },
          "target" : {
            "id": "http://example.org/blog/",
            "type": "OrderedCollection",
            "name": "Martin's Blog"
          }
        }
        return as
        /*  {
        "@context": "https://www.w3.org/ns/activitystreams",
        "summary": "Martin added an article to his blog",
        "type": "Add",
        "published": "2015-02-10T15:04:55Z",
        "actor": {
        "type": "Person",
        "id": "http://www.test.example/martin",
        "name": "Martin Smith",
        "url": "http://example.org/martin",
        "image": {
        "type": "Link",
        "href": "http://example.org/martin/image.jpg",
        "mediaType": "image/jpeg"
      }
    },
    "object" : {
    "id": "http://www.test.example/blog/abc123/xyz",
    "type": "Article",
    "url": "http://example.org/blog/2011/02/entry",
    "name": "Why I love Activity Streams"
  },
  "target" : {
  "id": "http://example.org/blog/",
  "type": "OrderedCollection",
  "name": "Martin's Blog"
}
}*/
}





}
}
