<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link><br>
    <router-link to="/student" v-if="roleAdmin">Student</router-link>
    <router-link to="/staff" v-if="roleAdmin">Staff</router-link>
  </nav>
  <div class="content">
    <router-view/>
  </div>
  
</template>

<script>

export default{
  data(){
    return{
      roleAdmin: true,//this.$store.state.loggedInAs === "admin",
      storeState: this.$store.state.loggedInAs
    } 
  },
  created(){
    this.$watch('storeState', (newSTate) =>{
      console.log("storeState changeds")
    } )
  } ,
  watch: {
    storeState(var1, var2){
      console.log("var1: ", var1);
      console.log("var2: ", var2);
       console.log("store loggedInAs: ", this.$store.state.loggedInAs)
    } 
   
  }  

} 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.content{
    display: flex;
    flex-direction: column;
    height: 400px;
    justify-content: center;
    align-items: center;
    background-color: green;
    margin-left: 8%;
    width: 85%;
} 
</style>
