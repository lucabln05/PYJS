//this script read out the input fields and send the data to the server


const ws = new WebSocket('ws://192.168.178.179:10');  // connect to ws server 

// if connectet send a message to the server, end refresh the connection
ws.addEventListener('open', () => {
    console.log('connected to server');
});

// check if the user is logged in and if not redirect to the login page
var username_check = localStorage.getItem('login_user');
var password_check= localStorage.getItem('login_password');
if (username_check == null && password_check == null) {
    alert("You are not logged in");
    window.location.href = "../account_site/account.html";
}

function getinput() {

        // get the input value
        var username = localStorage.getItem('login_user');
        var password = localStorage.getItem('login_password');
        if (username != null && password != null) {
            var CodeLanguage = document.getElementById("language").value;
            var title = document.getElementById("title").value;
            var Code = document.getElementById("code").value;

            // get value form code input field and add a ^#^ to the end of a line
            var Code = Code.replace(/\n/g, "^#^");
            // replace all " with ' in code otherwise mysql cant handle it
            var Code = Code.replace(/"/g, "'");
            // make the inputs server readable
            var message_server_readable = 'add_post' + '/--/' + username + '/--/' + password + '/--/' + CodeLanguage + '/--/'+ title +'/--/' + Code;

            ws.send(message_server_readable); // send server that we want to get the posts

            // clear the input fields
            document.getElementById("language").value = "";
            document.getElementById("title").value = "";
            document.getElementById("code").value = "";
            ws.CLOSED;
        }
        else {
            // go to login page if the user is not logged in
            window.location.href = "../login_site/login.html";
        }

};