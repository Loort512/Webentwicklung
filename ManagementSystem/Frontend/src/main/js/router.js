
// load fragment in content div
function load_login() {
    document.getElementById("content").innerHTML='<object type="text/html" data="login.html" ></object>';
}

// route to fragments
function route(target) {
    let isLogin = sessionStorage.getItem("loggedIn");
    console.log("route to: " + target);
    if(target === "login") {
        this.login();
    }
    if(isLogin !== "true") {
        console.log("USER is not logged in -> route to login page");
        target = "login";
    }
    // if logged in as role the add folder in path
    $('#content').load("./fragments/" + target + ".html");
}

function login() {
    
} 
