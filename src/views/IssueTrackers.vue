<template>
  <div class="container">


    <Explorer />

    Folder : {{ folder.url }}
    <br>

    <b-button @click="createTracker">Tracker</b-button>
    <b-button @click="createDokieli">Dokieli</b-button>


    <a href="https://solidos.solidcommunity.net/public/Roadmap/Tasks/index.ttl#this" target="_blank">
      Solid roadmap in RDF</a>
      <br>
      <a href="https://spoggy-test.solidcommunity.net/public/Tasks/index.ttl#this" target="_blank">Popock Roadmap</a>

      <hr>

      new tracker : https://raw.githubusercontent.com/solid/issue-pane/master/Documentation/FooTracker/index.ttl


      <!--  <Component /> -->
    </div>
  </template>

  <script>
  
  //import {  rdf} from 'rdf-namespaces'
  //import ToastMixin from '@/mixins/ToastMixin'

  import {
    getFile,
    isRawData,
    getContentType,
    getSourceUrl,
  } from "@inrupt/solid-client";



  export default {
    name: 'ModeleView',
    components: {
      'Explorer': () => import('@/components/explorer/Explorer'),
    },
    //  mixins: [ToastMixin],
    props:['value'],
    data() {
      return {
        index : `@prefix wf: <http://www.w3.org/2005/01/wf/flow#>.
        @prefix cal: <http://www.w3.org/2002/12/cal/ical#>.
        @prefix link: <http://www.w3.org/2007/ont/link#>.
        @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
        @prefix owl: <http://www.w3.org/2002/07/owl#>.
        @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
        @prefix foaf: <http://xmlns.com/foaf/0.1/>.
        @prefix doap: <http://usefulinc.com/ns/doap#>.
        @prefix ui: <http://www.w3.org/ns/ui#>.
        @prefix dc: <http://purl.org/dc/elements/1.1/>.
        @prefix vcard: <http://www.w3.org/2006/vcard/ns#>.
        @prefix : <#>.    # Local identifiers use default namespace


        :this a wf:Tracker;
        dc:title "Issue Tracker for the Foo project" ;
        wf:stateStore <state.ttl> ;
        wf:messageStore <chat.ttl> .

        # Initial state of newly created issues
        :this wf:stateClass :FooIssueStatus ;
        wf:initialState :New.

        # Issue Class
        :this wf:issueClass :FooIssueStatus .

        # Define the status of the request
        :FooIssueStatus a rdfs:Class; rdfs:subClassOf wf:Task;
        rdfs:label "Request";
        owl:disjointUnionOf (
          :New :Discussing :Pending :Negotiating :Accepted :Urgent :ToBeDeclined
          :Declined :Obsolete :Done ).

          :New a rdfs:Class; rdfs:subClassOf :FooIssueStatus, wf:Open; rdfs:label "new"; ui:sortOrder 90;
          rdfs:comment """Has not been looked at.
          This is the initial state normally when an issue is created.""".
          :Discussing a rdfs:Class; rdfs:subClassOf :FooIssueStatus, wf:Open; rdfs:label "in discussion"; ui:sortOrder 80;
          rdfs:comment "Being discussed".
          :Pending a rdfs:Class; rdfs:subClassOf :FooIssueStatus, wf:Open; rdfs:label "pending others"; ui:sortOrder 75;
          rdfs:comment "Waiting for an external person's input.".
          :Negotiating a rdfs:Class; rdfs:subClassOf :FooIssueStatus, wf:Open; rdfs:label "negotiating"; ui:sortOrder 60;
          rdfs:comment "Being negotiated".
          :Accepted a rdfs:Class; rdfs:subClassOf :FooIssueStatus, wf:Open; rdfs:label "Accepted, in progress"; ui:sortOrder 50;
          rdfs:comment "Will go ahead. We are working on this".
          :Urgent a rdfs:Class; rdfs:subClassOf :FooIssueStatus, wf:Open; rdfs:label "URGENT"; ui:sortOrder 55;
          rdfs:comment "Needs urgent attention".
          :ToBeDeclined a rdfs:Class; rdfs:subClassOf :FooIssueStatus, wf:Open; rdfs:label "to be declined"; ui:sortOrder 40;
          rdfs:comment "To be declined".
          :Declined a rdfs:Class; rdfs:subClassOf :FooIssueStatus, wf:Closed; rdfs:label "declined"; ui:sortOrder 30;
          rdfs:comment "Declined".
          :Done a rdfs:Class; rdfs:subClassOf :FooIssueStatus, wf:Closed; rdfs:label "done"; ui:sortOrder 20;
          rdfs:comment "Completed.".
          :Obsolete a rdfs:Class; rdfs:subClassOf :FooIssueStatus, wf:Closed; rdfs:label "obsolete/missed"; ui:sortOrder 10;
          rdfs:comment "Overtaken by time or events.".

          # Issue Category
          :this wf:issueCategory :FooIssueType .

          :FooIssueType a rdfs:Class; rdfs:subClassOf wf:Task ;
          rdfs:label "Type" ;
          owl:disjointUnionOf (:Task :Story :Bug) .

          :Task a rdfs:Class; rdfs:subClassOf :FooIssueType; rdfs:label "Task"; ui:sortOrder 90;
          rdfs:comment """Task""".
          :Story a rdfs:Class; rdfs:subClassOf :FooIssueType; rdfs:label "Story"; ui:sortOrder 80;
          rdfs:comment """User Story""".
          :Bug a rdfs:Class; rdfs:subClassOf :FooIssueType; rdfs:label "Bug"; ui:sortOrder 70;
          rdfs:comment """Bug""".

          # Assignees:
          :FooProject doap:bug-database :this .
          :FooProject doap:developer  :Alice, :Bob, :Charlie .

          :Alice foaf:name "Alice Accacia".
          :Bob foaf:name "Bob Brown".
          :Charlie foaf:name "Robert Crimson".

          # Allow subissues?
          :this wf:allowSubIssues true .

          # List of issue properties to display in the table.
          :this wf:propertyList (wf:assignee wf:description) .

          # ends`,

        }
      },
      created(){
        //  console.log("route",this.$route)
        //  this.url = this.$route.params.url
        //  this.getData()
      },
      methods: {
        async createTracker(){
          console.log(this.folder.url)
          const file = await getFile(
            this.folder.url+"index.ttl"
          );
          // file is a Blob (see https://developer.mozilla.org/docs/Web/API/Blob)
          console.log(
            `Fetched a ${getContentType(file)} file from ${getSourceUrl(file)}.`
          );
          console.log(`The file is ${isRawData(file) ? "not " : ""}a dataset.`);

        },
        createDokieli(){
          console.log(this.folder.url)
        }
        /*async getData() {
        let dataDoc = await this.$fc.readFile(this.url);
        let subj = dataDoc.getSubject(this.url+"#this")
        console.log(subj)
        let types = subj.getAllRefs(rdf.type)
        console.log(types)
      }*/
    },

    watch:{
      folder(){
        console.log(this.folder.url)
      }
      /*'$route' (to) {
      //  '$route' (to, from) {
      console.log(to)
    },
    url(url){
    console.log("URL CHANGE",url)
  }*/
},
computed:{

  folder: {
    get: function() { return this.$store.state.solid.folder},
    set: function() {}
  },
},
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
