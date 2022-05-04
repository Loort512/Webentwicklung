
// load fragment in content div
function load_login() {
    document.getElementById("content").innerHTML='<object type="text/html" data="login.html" ></object>';
}

// route to fragments
function route(target=login) {
    let isLogin = sessionStorage.getItem("loggedIn");
    console.log("route to: " + target);
    
    if(target === "login") {
        // do login process
        this.login();
    }
    if(isLogin !== "true") {
        console.log("USER is not logged in -> route to login page");
        target = "login";
    }
    // if logged in as role the add folder in path
    //load_fragment();
    //$("#content").load("./fragments/login.html")
    document.getElementById("content").innerHTML='<object type="text/html" data="fragments/' + target + '.html" ></object>';
}

function load_fragment(){
    var doc = document.querySelector('link[rel="import"]').import
    var text = doc.querySelector('.doc');

    console.log("doc: ", doc);
    console.log("text: ", text)

    document.body.appendChild(text.cloneNode(true))
} 

function login() {
    // filter data from frontend and reutrn if logged in
} 
