// connect to the python websocket server content_server.py 
import './display_content.js';
const ws = new WebSocket('ws://localhost:10');


ws.addEventListener('open', () => {

    console.log('connected to server');
    ws.send('client connected');
});

function resive_data() {
    //get the message from the server and display it on the page id="content"
    ws.addEventListener('message', (event) => {
        document.getElementById('raw_data').innerHTML = event.data;
        split_content(document.getElementById('raw_data').innerHTML);
});
}


resive_data();
