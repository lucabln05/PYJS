#https://websockets.readthedocs.io/en/stable/

import asyncio
import websockets

from database_connector import get_post, add_post

import time
print(time.time())

async def echo(websocket):
    async for message in websocket:
        echo.message = message
        check = message.startswith("add_post")
        if (echo.message == 'get_post'):
            get_post()
            await websocket.send(get_post.content)
        elif check == True:
            add_post(echo.message)
        else:
            print("Error")

async def main():
    async with websockets.serve(echo, "localhost", 10):
        await asyncio.Future()  # run forever

asyncio.run(main())
