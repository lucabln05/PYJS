#https://websockets.readthedocs.io/en/stable/

import asyncio
import websockets
from database_connector import get_post, add_post, get_logi, get_usco


async def echo(websocket):
    async for message in websocket:
        echo.message = message
        command = message[0:8]
        if command == 'get_post':
            get_post()
            await websocket.send(get_post.content)
        elif command == 'add_post':  
            add_post(echo.message)
        elif command == 'get_logi':
            get_logi(echo.message)
            await websocket.send(str(get_logi.login))
        elif command == 'get_usco':
            get_usco(echo.message)
            await websocket.send(get_usco.content)
        else:
            print("Error")

async def main():
    async with websockets.serve(echo, "192.168.178.179", 10):
        await asyncio.Future()  # run forever

asyncio.run(main())
