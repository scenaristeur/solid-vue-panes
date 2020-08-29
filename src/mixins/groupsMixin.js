import { fetchDocument } from 'tripledoc';
import { vcard } from 'rdf-namespaces'

export default {
  methods: {
    async getGroup(url) {
      let group = {members: [], subgroups: []}
      const groupDoc = await fetchDocument(url);
      let index = groupDoc.findSubject()
      group.name = index.getLiteral(vcard.fn)
      group.members = index.getAllNodeRefs(vcard.hasMember)
      group.purpose = index.getLiteral('http://www.w3.org/ns/org#purpose')
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
