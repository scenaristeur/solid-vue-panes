
export default {
  methods: {
    makeToast(title, content, variant = null) {
      this.$bvToast.toast(content , {
        title: title,
        variant: variant,
        solid: true
      })
    }
  }


}
