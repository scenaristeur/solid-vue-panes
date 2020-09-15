import { createDocument, fetchDocument } from 'tripledoc';
import { rdf, rdfs } from 'rdf-namespaces'
import auth from 'solid-auth-client';
const SolidFileClient = window.SolidFileClient
const fc = new SolidFileClient(auth)

const state = () => ({
  workspaces: [],
  storage: ""
})


const getters = {}

// actions
const actions = {
  async getUserWorkspaces(context){
    let indexFile = context.rootState.solid.storage+"popock/workspaces.ttl"
    let workspacesDoc = {}
    let workspaces = []
    try{
      workspacesDoc = await fetchDocument(indexFile)
      let subjects = workspacesDoc.getAllSubjectsOfType("http://www.w3.org/ns/pim/space#Workspace")
          for  (let s of subjects) {
        let name = s.getLiteral(rdf.label)
        let path = s.getRef("http://www.w3.org/ns/pim/space#storage")
        let pod = s.getRef("http://www.w3.org/ns/solid/terms#webId")
        workspaces.push({name: name, path: path, pod: pod})
        context.commit('updateWorkspaces', workspaces)
      }

    }catch(e){
    //  console.log(e)
      //  workspacesDoc = await createDocument(indexFile)
    }


  },
  async addWorkspace(context, workspace) {
    let indexFile = context.rootState.solid.storage+"popock/workspaces.ttl"
    let workspacesDoc = {}
    try{
      workspacesDoc = await fetchDocument(indexFile)
    }catch(e){
      workspacesDoc = await createDocument(indexFile)
    }
    let subject  = workspacesDoc.addSubject()
    subject.addRef(rdf.type,"http://www.w3.org/ns/pim/space#Workspace")
    subject.addLiteral(rdfs.label, workspace.name.trim())
    subject.addRef("http://www.w3.org/ns/pim/space#storage", workspace.path.trim())
    subject.addRef("http://www.w3.org/ns/solid/terms#webId", workspace.pod.trim())
    await workspacesDoc.save();

    console.log(indexFile)
    context.commit("addWorkspace",workspace)
  },
  async updateWorkspaces(context, workspaces){
    let indexFile = context.rootState.solid.storage+"popock/workspaces.ttl"
    console.log(indexFile)
    fc.delete(indexFile)
    let workspacesDoc = await createDocument(indexFile)


    workspaces.forEach((w) => {
      let subject  = workspacesDoc.addSubject()
      subject.addRef(rdf.type,"http://www.w3.org/ns/pim/space#Workspace")
      subject.addLiteral(rdfs.label, w.name.trim())
      subject.addRef("http://www.w3.org/ns/pim/space#storage", w.path.trim())
      subject.addRef("http://www.w3.org/ns/solid/terms#webId", w.pod.trim())
    });




    await workspacesDoc.save();
    context.commit('updateWorkspaces', workspaces)
  }

}

// mutations
const mutations = {
  addWorkspace(state, workspace) {
    state.workspaces.push(workspace)
  },
  updateWorkspaces(state, workspaces){
    state.workspaces = workspaces
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
