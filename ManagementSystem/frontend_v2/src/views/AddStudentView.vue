<template>
    <div class="addStudent">
        <div class="header">
            <router-link v-if="this.$store.state.loggedInAs === 'admin'" to="/student" >Student</router-link> |  
            <router-link v-if="this.$store.state.loggedInAs === 'admin'" to="/staff" >Staff</router-link><br>
            <router-link v-if="this.$store.state.loggedInAs === 'staff'" to="/courses" >Courses</router-link>
        </div>
        <form>

        <Alert v-if="showAlert" :notifications="alertMsg"></Alert>
        <h1>Add Student</h1>
        <div class="inputForm">
            <label for="studentID">ID</label>
            <input v-model="student.id" 
                id="studentID" 
                class="input" 
                type="text"
                @change="vallidateStudent(student, false)"/>
        </div>

        <div class="inputForm">
            <label for="firstName">First Name</label>
            <input v-model="student.firstName" 
                id="firstName" 
                class="input" 
                type="text"
                @change="vallidateStudent(student, false)"/>
        </div>
        
        <div class="inputForm">
            <label for="lastName">Last Name</label>
            <input v-model="student.lastName" 
                id="lastName" 
                class="input" 
                type="text"
                @change="vallidateStudent(student, false)"/>
        </div>
        

        <div class="inputForm">
            <label for="dob">DOB</label>
            <input v-model="student.dob" 
                id="DOB" 
                class="input" 
                type="date"
                @change="vallidateStudent(student, false)" />
        </div>
        

        <div class="inputForm">
            <label for="dob">Gender</label>
            <input v-model="student.gender" 
                id="gender" 
                class="input" 
                type="text"
                @change="vallidateStudent(student, false)"/>

        </div>

        <div class="inputForm">
            <label for="dob">Department</label>
            <select name="departmentSelection" id="departmentSelection" @change="selectDepartment($event)" >
                <option value="add New">add New</option>
                <option v-for="department in getDepartmentsByStudent()" value={{department}}>{{department}}</option>
            </select>
            <input v-model="student.department" 
                id="department" 
                class="input" 
                type="text"
                @change="vallidateStudent(student, false)"/>
        </div>

        <div class="inputForm">
            <label for="dob">Email ID</label>
            <input v-model="student.emailID" 
                id="emailID" 
                class="input" 
                type="text"
                @change="vallidateStudent(student, false)"/>
        </div>

        <div class="inputForm">
            <label for="joiningDate">Joining Date</label>
            <input v-model="student.joiningDate" 
                id="emailID" 
                class="input" 
                type="date"
                @change="vallidateStudent(student, false)"/>
        </div>

        

        <button v-if="!showAlert" id="btnAddStudent" type="button" @click="addStudent()">Add</button>
</form>
    </div>
</template>
<script>
import Alert from '../components/Alert.vue'

export default {
  name: 'LoginView',
  data(){
      return{
            student:{
                id: '',
                firstName: '',
                lastName: '',
                dob: '',
                gender: '',
                department: '',
                emailID: ''
            } ,
            showAlert: false,
            alertMsg: [] ,
            selectedDepartment: ''
      } 
  }, 
  components:{
      Alert
  }, 
  methods:{
        addStudent(){
            this.vallidateStudent(this.student, true);
            if(this.showAlert){
                return;
            } 

            let student ={
                id: this.student.id,
                firstName: this.student.firstName,
                lastName: this.student.lastName,
                dob: this.student.dob,
                gender: this.student.gender,
                department: this.student.department,
                emailID: this.student.emailID,
                joiningDate: this.student.joiningDate
            } 
            this.$store.dispatch('addStudent', student);

            this.$router.push({ path: '/student' }  )
        } ,
        vallidateStudent(item, emptyCheck){
            console.log("validate Student");
            this.alertMsg = [] ;
            this.showAlert = false;
            if(item.id){
                this.validateId(item.id)
            } else if(emptyCheck){
                this.showAlert = true;
                this.alertMsg.push("ID cannot be empty")
            } 
            if(item.firstName){
                this.validateName("First Name", item.firstName);
            } else if(emptyCheck){
                this.showAlert = true;
                this.alertMsg.push("First Name cannot be empty")
            } 
            if(item.lastName){
                this.validateName("Last Name", item.lastName);
            } else if(emptyCheck){
                this.showAlert = true;
                this.alertMsg.push("Last Name cannot be empty")
            } 
            if(item.dob){
                this.validateBOD(item.dob);
            } else if(emptyCheck){
                this.showAlert = true;
                this.alertMsg.push("DOB cannot be empty")
            } 
            if(item.gender){
                this.validateGender(item.gender);
            } else if(emptyCheck){ 
                this.showAlert = true;
                this.alertMsg.push("Gender cannot be empty")
            } 
            if(item.department){
                this.validateName("Department", item.department);
            } else if(emptyCheck){
                this.showAlert = true;
                this.alertMsg.push("Department cannot be empty")
            } 
            if(item.emailID){
                
            } else if(emptyCheck){
                this.showAlert = true;
                this.alertMsg.push("Email ID cannot be empty")
            } 
        } ,
        validateName(fieldName, str){
            console.log("validate fieldname; string", fieldName, str)
            if(!str.match("^[a-zA-Z ]+$")){
                this.showAlert = true;
                this.alertMsg.push(fieldName + " is not valid");
            } 
        },
        validateBOD(str){
            let bodDate = new Date(str);
            let now = new Date();
            let limit = new Date(now.getFullYear() - 17, now.getMonth(), now.getDate())
            console.log(limit.toLocaleDateString('en-us', { year:"numeric", month:"numeric", day:"numeric"}))
            if(bodDate > now){
                this.showAlert = true;
                this.alertMsg.push("Date has to be in the Past");
            } 
            if(bodDate > limit){
                this.showAlert = true;
                this.alertMsg.push("You have to be at least 17 years old");
            } 
        },
        validateGender(str) {
            if(!(str === "d" || str === "w" || str === "m")) {
                this.showAlert = true;
                this.alertMsg.push("Gender can be m/w/d");
            } 
        } ,
        validateId(str) {
            if(!str.match("^[0-9]+$")){
                this.showAlert = true;
                this.alertMsg.push("ID is not valid");
            }
        } ,
        validateEmail(str){
            console.log(str)
            if(!str.match("^.*@.*$")){
                this.showAlert = true;
                this.alertMsg.push("Email is not valid");
            }
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
            
            return departments;
        },
        selectDepartment(event){
            this.student.department = event.target.options[event.target.options.selectedIndex].text;;
        } 
  } 
}
</script>
<style scoped>
.addStudent{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
} 
.inputForm{
    display: flex;
    flex-direction: column;
} 
</style>