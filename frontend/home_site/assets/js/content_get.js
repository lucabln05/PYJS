// connect to the python websocket server and store the message in local storage for the display_content.js to use.

const ws = new WebSocket('wss://192.168.178.179:10');  // connect to ws server 

// if connectet send a message to the server, end refresh the connection
ws.addEventListener('open', () => {
    console.log('connected to server');
    ws.send('get_post'); // send server that we want to get the posts
    ws.CLOSED;
});

 //get the message from the server and display it on the page id="content"
 ws.onmessage = function(e) {
    localStorage.setItem('raw_data', e.data);   // store the message in local storage
    ws.CLOSED;
}






