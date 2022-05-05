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
            <tr v-for="student in students">
                <th> {{student.id}} </th>
                <th> {{student.firstName}} </th>
                <th> {{student.lastName}} </th>
                <th> {{student.dob}} </th>
                <th> {{student.gender}} </th>
                <th> {{student.department}} </th>
                <th> {{student.emailID}} </th>
                <th>  <input type="button" value="UPDATE" @click="updateStudent(student.id)"/> </th>
                <th>  <input type="button" value="DELETE" @click="deleteStudent(student.id)"/> </th>
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
            students:[] 
        }  
    }, 
    components:{
        InputModal
    } ,
    mounted(){
        console.log("created StudentView")
        this.students = this.$store.state.students
        console.log("students: ", this.students)
    },
    methods:{
      addStudent(){
          console.log("addStudent")
          this.$router.push({path: '/addstudent'}  )
      } ,
      updateStudent(id){
          console.log("updateStudent ", id)
          //this.$router.push({path: '/addStudent'} )
      } ,
      deleteStudent(id){
          console.log("delete Student ", id)
      } 
    }  
} 
</script>
<style scoped>

</style>
