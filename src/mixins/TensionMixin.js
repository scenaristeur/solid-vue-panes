import toastMixin from '@/mixins/toastMixin'

export default {
  mixins: [toastMixin],
  data: function () {
    return {
      tension: {}
    }
  },
  methods: {
    createTension() {
      var dateObj = new Date();
      var date = dateObj.toISOString()
      this.tension.created = date  //http://purl.org/dc/terms/created
      this.tension.types = ["http://purl.org/vocab/lifecycle/schema#Task", "http://www.w3.org/ns/ldp#Resource"]
      console.log(this.tension)
      this.makeToast("Tension created", this.tension.label, "success")
      this.tension = {}
    }
  }
}
