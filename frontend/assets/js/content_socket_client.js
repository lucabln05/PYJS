// connect to the python websocket server content_server.py 

const ws = new WebSocket('ws://localhost:10');

ws.addEventListener('open', () => {

    console.log('connected to server');
    ws.send('client connected');
});

 //get the message from the server and display it on the page id="content"
 ws.onmessage = function(e) {
    localStorage.setItem('raw_data', e.data);
}






