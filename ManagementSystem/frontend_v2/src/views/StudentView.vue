<template>
    <div class="student">
        <h1>Students</h1>
        <input type="button" value="ADD" @click="addStudent()"/>
        <table border=1>
            <tr>
                <th>Student ID</th>
                <th>First name</th>
                <th>Last name</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Department</th>
                <th>Email ID</th>
            </tr>
            <tr>
                <th>test</th>
                <th>test</th>
                <th>test</th>
                <th>test</th>
                <th>test</th>
                <th>test</th>
                <th>test</th>
            </tr>
        </table>
    </div>
</template>

<script>
import InputModal from '../components/InputModal.vue'

export default{
    name: 'AdminView',
    data(){
        return{

        }  
    }, 
    components:{
        InputModal
    } ,
    computed(){

    },
    methods:{
      addStudent(){
          console.log("addStudent")
      } 
    }  
} 
</script>
<style scoped>

</style>
