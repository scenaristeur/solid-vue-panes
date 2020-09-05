
const state = () => ({
  //// crud version 1
  count: 0,
  webId: null,
  storage: "",
  shape_url: "",
  schema: null,
  currentShape: "",
  shapes: [],
  footprint_shapes: [],
  translate_shapes: [],
  formData: {},
  all: [],
  //// crud-shape version 2
  workspace: "",
  shape : {}
})


const getters = {}

// actions
const actions = {
}

// mutations
const mutations = {
  ////// crud version 1
  fillForm(state, data){
    //  shape,predicate,value, datatype
    //  console.log("FILL",data.shape,data.predicate,data.value, data.datatype)
    state.formData[data.shape] == undefined ? state.formData[data.shape] = {} : ""
    data.value.length > 0 ? state.formData[data.shape][data.predicate]=data.value : delete state.formData[data.shape][data.predicate]
    console.log("data", state.formData)
  },
  increment (state) {
    state.count++
  },
  setWebId(state, webId){
    state.webId = webId
  },
  setStorage(state, storage){
    state.storage = storage
  },
  setShapeUrl (state, shape_url) {
    state.shape_url = shape_url
  },
  setSchema (state, schema) {
    state.schema = schema
  },
  setShapes (state, shapes) {
    state.shapes = shapes
  },
  setFShapes (state, fshapes) {
    state.footprint_shapes = fshapes
  },
  setTShapes (state, tshapes) {
    state.translate_shapes = tshapes
  },
  setCurrentShape (state, shape) {
    state.currentShape = shape
  },

  //// crud-shape version 2
  setWorkspace (state, wsp) {
    state.workspace = wsp
  },
  setShape(state, shape) {
    state.shape = shape
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
