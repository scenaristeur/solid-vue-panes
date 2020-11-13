import { fetchDocument } from 'tripledoc';
import { vcard } from 'rdf-namespaces'

export default {
  methods: {
    async getGroup(url) {
      let group = {members: [], subgroups: []}
      const groupDoc = await fetchDocument(url);
      let index = groupDoc.findSubject()
      group.name = index.getLiteral(vcard.fn)
      group.members = index.getAllRefs(vcard.hasMember)
      group.purpose = index.getLiteral('http://www.w3.org/ns/org#purpose')
      group.parent = index.getRef("http://www.w3.org/ns/org#subOrganizationOf")
      group.subgroups =  index.getAllRefs("http://www.w3.org/ns/org#hasSubOrganization")

      let chat_index = groupDoc.findSubject("http://www.w3.org/ns/solid/terms#forClass", "http://www.w3.org/ns/pim/meeting#LongChat")
      if (chat_index != null){
        group.chat_instance = chat_index.getRef("http://www.w3.org/ns/solid/terms#instance")
        console.log("chat instance",group.chat_instance)
      }

      return group
    },
    makeToast(title, content,variant = null) {
      this.$bvToast.toast(content , {
        title: title,
        variant: variant,
        solid: true
      })
    }
  }


}
