// connect to the python websocket server and store the message in local storage for the display_content.js to use.

const ws = new WebSocket('ws://localhost:10');  // connect to ws server 

// if connectet send a message to the server, end refresh the connection
ws.addEventListener('open', () => {

    console.log('connected to server');
    ws.send('client connected');
});

 //get the message from the server and display it on the page id="content"
 ws.onmessage = function(e) {
    localStorage.setItem('raw_data', e.data);   // store the message in local storage
}






