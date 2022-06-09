<template>
    <div class="student">
        <div class="header">
            <router-link v-if="this.$store.state.loggedInAs === 'admin'" to="/student" >Student</router-link> |  
            <router-link v-if="this.$store.state.loggedInAs === 'admin'" to="/staff" >Staff</router-link><br>
            <router-link v-if="this.$store.state.loggedInAs === 'staff'" to="/courses" >Courses</router-link>
        </div>
        <h1>Students</h1>
        <select name="departmentSelection" id="departmentSelection" @change="filterStudentsByDepartment($event)" >
            <option value="noFilter">no Filter</option>
            <option v-for="department in getDepartmentsByStudent()" value={{department}}>{{department}}</option>
        </select>
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
            <tr v-for="student in studentsView">
                <th> {{student.id}} </th>
                <th> {{student.firstName}} </th>
                <th> {{student.lastName}} </th>
                <th> {{student.dob}} </th>
                <th> {{student.gender}} </th>
                <th> {{student.department}} </th>
                <th> {{student.emailID}} </th>
                <th>  <input type="button" value="UPDATE" @click="updateStudent(student)"/> </th>
                <th>  <input type="button" value="DELETE" @click="deleteStudent(student.id)"/> </th>
            </tr>
        </table>
        <br><br>
        <input type="button" value="ADD" @click="addStudent()"/>

        <!-- UPDATE STUDENT -->
        <div v-if="activeStudent" class="inputGroup">
            <h3>Update Student</h3>
            <div class="inputForm">
                <label for="studentID">ID</label>
                <input v-model="activeStudent.id" 
                    id="studentID" 
                    class="input" 
                    type="text"/>
            </div>

            <div class="inputForm">
                <label for="firstName">First Name</label>
                <input v-model="activeStudent.firstName" 
                    id="firstName" 
                    class="input" 
                    type="text"/>
            </div>
            
            <div class="inputForm">
                <label for="lastName">Last Name</label>
                <input v-model="activeStudent.lastName" 
                    id="lastName" 
                    class="input" 
                    type="text"/>
            </div>
            

            <div class="inputForm">
                <label for="dob">DOB</label>
                    <input v-model="activeStudent.dob" 
                    id="DOB" 
                    class="input" 
                    type="text"/>
            </div>
            

            <div class="inputForm">
                <label for="dob">Gender</label>
                <input v-model="activeStudent.gender" 
                    id="gender" 
                    class="input" 
                    type="text"/>
            </div>

            <div class="inputForm">
                <label for="dob">Department</label>
                <input v-model="activeStudent.department" 
                    id="department" 
                    class="input" 
                    type="text"/>
            </div>

            <div class="inputForm">
                <label for="dob">Email ID</label>
                <input v-model="activeStudent.emailID" 
                    id="emailID" 
                    class="input" 
                    type="text"/>
            </div>

            <input type="button" value="Update Student" @click="updateStudent(activeStudent)"/>
        </div>
    
    </div>
</template>

<script>
import InputModal from '../components/InputModal.vue'

export default{
    name: 'StudentView',
    data(){
        return{
            studentsView:[] ,
            activeStudent: '' ,
            showUpdateContent: false
        }  
    }, 
    components:{
        InputModal
    } ,
    mounted(){
        console.log("created StudentView")
        this.studentsView = this.$store.state.students
        console.log("students: ", this.studentsView)
        console.log("active student: ", this.activeStudent)
        this.getDepartmentsByStudent()
    },
    methods:{
        addStudent(){
            console.log("addStudent")
            this.$router.push({path: '/addstudent'}  )
        } ,
        showUpdateContent(st){
            this.activeStudent = st;
            this.showUpdateContent = true;
        } ,
        updateStudent(st){
            if(this.activeStudent){
                this.activeStudent = undefined;
            } else{
                this.activeStudent = st;
            } 
        } ,
        deleteStudent(id){
            console.log("delete Student ", id)
            this.$store.dispatch('deleteStudent', id);
            this.$router.push({path: '/'}  );
            console.log("state in view: ", this.$store.state.students);
        } ,
        getDepartmentsByStudent(){
            let departmentsAll ={} ; 
            departmentsAll = this.$store.state.students.map((st) => {
                return st.department;
            } ); 

            let departments = []; 
            departmentsAll.forEach((d)  => {

                if(!departments.includes(d)){
                    departments.push(d)
                } 
                
            } );
            console.log("departments", departments)
            
            return departments;
        } ,
        filterStudentsByDepartment(event) {
            this.studentsView = this.$store.state.students;
            let filterString = event.target.options[event.target.options.selectedIndex].text;

            if(filterString === "no Filter"){
                return;
            } 
            
            this.studentsView = this.$store.state.students.filter((st) => {
                if(st.department === filterString) {
                    return st;
                } 
            })

        } 
          
    }  
} 
</script>
<style scoped>

</style>
