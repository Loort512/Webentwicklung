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
    } ,
    deleteStudent: (state, studentID) =>{

      // index = state.students.findIndex(st => st.id === studentID);
      
      // state.students.splice(index, 1);
      state.students.splice(studentID, 1)
      let newList =[]; 
      for(let i = 0; i < state.students.length; i++){
        console.log("el id: ", state.students[i].id )
        if(state.students[i].id !== studentID){
          console.log("found one element to push: ", state.students[i] )
          newList.push(state.students[i]);
        } else{
          console.log("el to delete: ", state.students[i] )
          console.log("el to delete di: ", studentID);
        } 
      } 
      console.log("newList: ", newList);
      state.students = newList;
      console.log("state: ", state.students);
    } 
  },
  actions: {
    addStudent: (context, payload) =>{
      context.commit('addStudent', payload);
    },
    loggedInAs: (context, payload) =>{
      context.commit("loggedInAs", payload);
    } ,
    deleteStudent: (context, payload) =>{
      context.commit("deleteStudent", payload);
    } 
    
  },
  modules: {
  }
})
