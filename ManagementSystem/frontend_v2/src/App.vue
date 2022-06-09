<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link><br>
  </nav>
  <div class="content">
    <router-view/>
  </div>
  
</template>

<script>

export default{
  data(){
    return{
    } 
  },
  created(){
    // create Test Data
    this.$store.dispatch('addStudent',{id: '2', firstName: 'Max', lastName: 'Muster', dob: new Date(1995, 10, 10).toISOString().slice(0, 10) , gender: 'm', department: 'HTW', emailID: 'max.muster@yahoo.de', joiningDate: new Date(2020, 10, 10).toISOString().slice(0, 10)} );
    this.$store.dispatch('addStudent',{id: '3', firstName: 'Moni', lastName: 'Muster', dob: new Date(1990, 10, 20).toISOString().slice(0, 10) , gender: 'm', department: 'HTW', emailID: 'moni.muster@yahoo.de', joiningDate: new Date(2021, 9, 10).toISOString().slice(0, 10)} );
    this.$store.dispatch('addStudent',{id: '4', firstName: 'Franz', lastName: 'Muster', dob: new Date(1995, 10, 10).toISOString().slice(0, 10) , gender: 'm', department: 'HTW', emailID: 'franz.muster@yahoo.de', joiningDate: new Date(1995, 4, 10).toISOString().slice(0, 10)} );
    this.$store.dispatch('addStudent',{id: '5', firstName: 'Tom', lastName: 'Muster', dob: new Date(1999, 5, 7).toISOString().slice(0, 10) , gender: 'm', department: 'HTW', emailID: 'tom.muster@yahoo.de', joiningDate: new Date(1995, 3, 10).toISOString().slice(0, 10)} );
    this.$store.dispatch('addStudent',{id: '6', firstName: 'Henrike', lastName: 'Muster', dob: new Date(1980, 4, 3).toISOString().slice(0, 10) , gender: 'w', department: 'HTW', emailID: 'he.muster@yahoo.de', joiningDate: new Date(1995, 2, 10).toISOString().slice(0, 10)} );
    this.$store.dispatch('addStudent',{id: '7', firstName: 'Laura', lastName: 'Muster', dob: new Date(1998, 1, 1).toISOString().slice(0, 10) , gender: 'w', department: 'HWR', emailID: 'laura.muster@yahoo.de', joiningDate: new Date(1995, 1, 10).toISOString().slice(0, 10)} );

    this.$store.dispatch('addStaff',{id: '2', firstName: 'Max1', lastName: 'Muster', dob: new Date(1991, 4, 6).toISOString().slice(0, 10) , gender: 'm', department: 'HTW', emailID: 'max.muster@yahoo.de'} );
    this.$store.dispatch('addStaff',{id: '3', firstName: 'Moni1', lastName: 'Muster', dob: new Date(1992, 12, 12).toISOString().slice(0, 10) , gender: 'm', department: 'HTW', emailID: 'moni.muster@yahoo.de'} );
    this.$store.dispatch('addStaff',{id: '4', firstName: 'Franz1', lastName: 'Muster', dob: new Date(1995, 9, 6).toISOString().slice(0, 10) , gender: 'm', department: 'HTW', emailID: 'franz.muster@yahoo.de'} );
    this.$store.dispatch('addStaff',{id: '5', firstName: 'Tom1', lastName: 'Muster', dob: new Date(1996, 7, 3).toISOString().slice(0, 10) , gender: 'm', department: 'HTW', emailID: 'tom.muster@yahoo.de'} );
    this.$store.dispatch('addStaff',{id: '6', firstName: 'Henrike1', lastName: 'Muster', dob: new Date(1990, 7, 4).toISOString().slice(0, 10) , gender: 'w', department: 'HTW', emailID: 'he.muster@yahoo.de'} );
    this.$store.dispatch('addStaff',{id: '7', firstName: 'Laura1', lastName: 'Muster', dob: new Date(1995, 4, 1).toISOString().slice(0, 10) , gender: 'w', department: 'HTW', emailID: 'laura.muster@yahoo.de'} );

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
  color: #8103c8;
}

body{
  background-image: url('assets/background.jpeg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

}  

.content{
    display: flex;
    flex-direction: column;
    height: auto;
    min-height: 500px;
    justify-content: center;
    align-items: center;
    background-color: #828282;
    margin-left: 24%;
    width: 53%;
} 

input[type=button]{
  height: 20pt;
  width: 54pt;
} 

button{
  height: 20pt;
  width: 54pt;
} 

table{
  min-width: -moz-available;
} 
</style>
