<template>
    <div class="login">
        <div v-if="showAlert" class="alert">
            <p>Wrong username or password</p>
        </div>
        <div class="loginStaff">
            <h1>Staff Login</h1>
            <p>
                <label for="emailStaff"></label>
                <input v-model="emailStaff" 
                        id="usernameStaff" 
                        class="input" 
                        type="text" 
                        placeholder="Benutzername"/>

                <label for="passwordStaff"></label>
                <input v-model="passwordStaff" id="passwordStaff" class="input" type="password" placeholder="Passwort"/><br/>
                <button id="btnLoginStaff" type="button" @click="login('staff')">Login</button>

            </p>
        </div>
        <div class="loginAdmin">
            <h1>Admin Login</h1>
            <p>
                <input id="usernameAdmin" class="input" type="text" placeholder="Benutzername"/><br/>
                <input id="passwordAdmin" class="input" type="password" placeholder="Passwort"/><br/>
                <button id="btnLoginAdmin" type="button" @click="login('admin')">Login</button>
            </p>
        </div>
    </div>
</template>
<script>

export default {
  name: 'LoginView',
  data(){
      return{
          emailStaff: '',
          passwordStaff: '',
          emailAdmin: '',
          passwordAdmin: '',
          showAlert: false
      } 
  }, 
  setup(){
      
  },
  methods:{
      login(type){
          var succeed = false;
          console.log("login: ", type);
          if(type === "staff"){
              if(this.emailStaff === "staff" && this.passwordStaff === "staff"){
                sessionStorage.setItem("loggedIn", "staff");
                succeed = true;
              } 
          }else if(type === "admin"){
              if(this.emailAdmin === "admin" && this.passwordAdmin === "admin"){
                sessionStorage.setItem("loggedIn", "admin");
                succeed = true;
              } 
          }  
          console.log("loggedIn: ", sessionStorage.getItem("loggedIn"));
          if(succeed){
              this.showAlert = false;
              this.$router.push( {path: '/'}  )
          }else{
              this.showAlert = true;
          } 
        
      } 
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
    display: flex;
    flex-direction: column;
    height: 400px;
    justify-content: center;
    align-items: center;
    background-color: green;
    margin-left: 8%;
    width: 85%;
} 
.alert{
    display: flex;
    height: 10%;
    justify-content: center;
    width: auto;
    padding: 1%;
    color: red; 
} 
</style>
