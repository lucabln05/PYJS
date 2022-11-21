//this script read out the input fields and send the data to the server


const ws = new WebSocket('ws://localhost:10');  // connect to ws server 

// if connectet send a message to the server, end refresh the connection
ws.addEventListener('open', () => {
    console.log('connected to server');
});
function getinput() {
        // get the input value
        var username = document.getElementById("user").value;
        var CodeLanguage = document.getElementById("language").value;
        var Code = document.getElementById("code").value;

        // get value form code input field and add a ^#^ to the end of a line
        var Code = Code.replace(/\n/g, "^#^");

        // make the inputs server readable
        var message_server_readable = 'add_post' + '/--/' + username + '/--/' + CodeLanguage + '/--/' + Code;

        ws.send(message_server_readable); // send server that we want to get the posts

        // clear the input fields
        document.getElementById("user").value = "";
        document.getElementById("language").value = "";
        document.getElementById("code").value = "";
        ws.CLOSED;
};