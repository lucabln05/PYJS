//this script read out the input fields and send the data to the server


const ws = new WebSocket('wss://192.168.178.179:10');  // connect to ws server 

// if connectet send a message to the server, end refresh the connection
ws.addEventListener('open', () => {
    console.log('connected to server');
});
function login_request() {
        // get the input value
        var username = document.getElementById("input_user").value;
        var password = document.getElementById("input_password").value;
        var message_server_readable = 'get_logi' + '/--/' + username + '/--/' + password;
        ws.send(message_server_readable); // send server that we want to get the posts

    //get the message from the server if it is a valid login
 ws.onmessage = function(e) {
    if (e.data == 'True') {
        // clear the input fields
        document.getElementById("input_user").value = "";
        document.getElementById("input_password").value = "";

        localStorage.setItem('login_user', username);   // store the message in local storage')
        localStorage.setItem('login_password', password);   // store the message in local storage')
        document.getElementById("login_message").innerHTML = "Login successful";
        window.location.href = "../share_site/share.html"; // redirect to the main page
    }
    else {
        document.getElementById("input_password").value = ""; // clear the password field

        //show the message that the login was not successful in red color
        document.getElementById("login_message").style.color = "red";
        document.getElementById("login_message").innerHTML = "Login failed";

    }
    ws.CLOSED;
}
}
