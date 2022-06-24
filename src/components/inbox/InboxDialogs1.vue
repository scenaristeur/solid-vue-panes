<template>
  <b-modal id="confirm-trash" title="Are you sure you want to delete" @ok="trash">
    {{ toTrash }}
  </b-modal>
</template>
<script>
import { deleteFile } from "@inrupt/solid-client";


export default {
  name: 'InboxDialogs',
  components: {
    //  'FriendsSelection': () => import('@/components/solid/FriendsSelection'),
  },
  data: function () {
    return {

    }
  },
  methods: {
    async trash() {
      console.log(this.toTrash)
      //  await this.$fc.deleteFile( this.toTrash, {withAcl:false})

      await deleteFile(
        this.toTrash
      );
      console.log("File deleted !");
    }
  },
  watch: {
    /*  async recipient (r) {
    this.title = "Reply to "+r.split('/').slice(2,3)[0]
    this.r_inbox = await this.getInbox(r)
  },
  */

},
computed:{
  label(){
    return this.$store.state.inbox.label
  },
  toTrash(){
    return this.$store.state.inbox.toTrash
  }
}
}
</script>
