import toastMixin from '@/mixins/toastMixin'
import fileMixin from '@/mixins/fileMixin'

export default {
  mixins: [toastMixin, fileMixin],
  data: function () {
    return {
      tension : {privacy:"public"}
    }
  },
  methods: {
    createTension() {
      this.tension.displayType = "Tension"
      // see https://vocab.org/lifecycle/schema#Task & https://noeldemartin.github.io/solid-focus/#
      this.tension.types = ["http://purl.org/vocab/lifecycle/schema#Task", "http://www.w3.org/ns/ldp#Resource"]
      this.tension.path = this.path
      console.log(this.tension, this.path)

      this.createFile(this.tension)


      this.tension = {privacy:"public"}

    }
  }
}
