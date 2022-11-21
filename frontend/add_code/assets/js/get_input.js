//this script read out the input fields and send the data to the server


// if press button get input value

const ws = new WebSocket('ws://localhost:10');  // connect to ws server 

// if connectet send a message to the server, end refresh the connection
ws.addEventListener('open', () => {
    console.log('connected to server');
});
function getinput() {
        var username = document.getElementById("user").value;
        var CodeLanguage = document.getElementById("language").value;
        var Code = document.getElementById("code").value;

        // make the inputs server readable
        var message_server_readable = 'add_post' + '/--/' + username + '/--/' + CodeLanguage + '/--/' + Code;

        ws.send(message_server_readable); // send server that we want to get the posts

        // clear the input fields
        document.getElementById("user").value = "";
        document.getElementById("language").value = "";
        document.getElementById("code").value = "";
        ws.CLOSED;
};