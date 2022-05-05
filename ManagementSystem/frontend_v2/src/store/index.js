import { createStore } from 'vuex'

export default createStore({
  state: {
    students:[] ,
    loggedInAs: String
  },
  getters: {
  },
  mutations: {
    addStudent: (state, payload) =>{
      console.log("addStudent")
      state.students.push(payload);
    } ,
    loggedInAs: (state, payload) =>{
      state.loggedInAs = payload;
    } 
  },
  actions: {
    addStudent: (context, payload) =>{
      context.commit('addStudent', payload);
    },
    loggedInAs: (context, payload) =>{
      context.commit("loggedInAs", payload);
    } 
    
  },
  modules: {
  }
})
