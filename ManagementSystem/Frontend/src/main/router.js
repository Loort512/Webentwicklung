
// load fragment in content div
function load_login() {
    document.getElementById("content").innerHTML='<object type="text/html" data="login.html" ></object>';
}

function load_fragment(target){
    // if logged in as role the add folder in path
    //load_fragment();
    //$("#content").load("fragments/login.html")
    document.getElementById("content").innerHTML='<object type="text/html" data="fragments/' + target + '.html" ></object>';
} 

// route to fragments
function route(target="login") {
    console.log("route to: " + target);
    console.log("isLoggedIn: ", isLoggedIn())
    if(!isLoggedIn()) {
        console.log("USER is not logged in -> route to login page");
        target = "login";
    }
    // if logged in as role the add folder in path
    load_fragment(target)
    //load_fragment();
    //$("#content").load("./fragments/login.html")
    //document.getElementById("content").innerHTML='<object type="text/html" data="fragments/' + target + '.html" ></object>';
}

function login(type) {
    console.log("login");
    // filter data from frontend and reutrn if logged in
    var mailStaff = "staff";
    var pwdStaff = "staff";
    var mailAdmin = "admin";
    var pwdAdmin = "admin";

    if(type === "staff") {
        console.log("staff login")
        var actualMailStaff = document.getElementById('usernameStaff').value;
        var actualPwdStaff = document.getElementById('passwordStaff').value;

        console.log("actual: ", actualMailStaff);
        console.log("pwd:  ", actualPwdStaff);

        if(actualMailStaff === mailStaff && actualPwdStaff === pwdStaff){
            console.log("Staff login succeed")
            setLoggedInToSession();
            route("staffCourse");
        } 
    } 
    
} 

function setLoggedInToSession(){
    sessionStorage.setItem("loggedIn", "1");
    console.log("changed sessionStorage: ", sessionStorage);
} 
function isLoggedIn(){
    var sessionVar = sessionStorage.getItem("loggedIn");
    console.log("sessionVar: ", sessionVar);
    if(sessionVar === "1"){
        return true;
    } 
    return false;
} 
