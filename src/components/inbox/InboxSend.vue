<template>
  <div class="inbox-send">
    Modal, {{ recipient }}
    <b-modal id="reply" :title="title">
      <b-list-group>

        <b-input-group prepend="Label">
          <b-form-input v-model="label"></b-form-input>
        </b-input-group>

        <b-form-textarea
        id="textarea-rows"
        placeholder=""
        v-model="content"
        rows="8"
        ></b-form-textarea>

        <!--<b-list-group-item>Move</b-list-group-item>-->
        <!--<b-list-group-item><b-icon-trash @click="trash"></b-icon-trash></b-list-group-item>-->
        <!--  <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
        <b-list-group-item>Vestibulum at eros</b-list-group-item>-->
      </b-list-group>
    </b-modal>



  </div>
</template>

<script>

export default {
  name: 'InboxSend',
  components: {
    //  'SolidLogin': () => import('@/components/solid/SolidLogin')
  },
  data: function () {
    return {
      title: "",
      content: ""
      //  replyTitle: "",

    }
  },
  watch: {
    recipient (r) {
      this.title = "Reply to "+r
    },
    oldContent (oc){
      this.content = `

    -------------------------------------------------------------
      ${oc}`
    }

  },
  computed:{
    webId(){
      return this.$store.state.solid.webId
    },
    recipient(){
      return this.$store.state.inbox.recipient
    },
    label(){
      return this.$store.state.inbox.label
    },
    oldContent(){
      return this.$store.state.inbox.oldContent
    }
  }
}
</script>
