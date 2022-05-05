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
      roleAdmin: true
    } 
  },
  computed(){
    console.log("computed");
    console.log("session: ", sessionStorage.getItem("loggedIn"))
    if(sessionStorage.getItem("loggedIn") === "admin"){
        roleAdmin = true;
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
