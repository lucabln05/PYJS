#https://websockets.readthedocs.io/en/stable/

import asyncio
import websockets

import time
print(time.time())

async def echo(websocket):
    async for message in websocket:
        print(message)
        await websocket.send('lucabln ^%^ PYTHON 3.10 ^%^ print("Hello World!") ^%^ for i in range(10): ^%^ print(i) ^$^github_user ^%^ JavaScript ^%^ console.log("Hello Wold") ^%^ for (i in range(10)): ^%^ console.log(i)^$^elon_musk ^%^ GO ^%^ package main ^%^ import "fmt" ^%^ func main() { ^%^ fmt.Println("Hello World!") ^%^ }')

async def main():
    async with websockets.serve(echo, "localhost", 10):
        await asyncio.Future()  # run forever

asyncio.run(main())