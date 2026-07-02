import { WebSocketServer } from "ws";
import { prismaClient } from "@repo/db/client"

import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, "../../../.env"),
});

const wss = new WebSocketServer({
    port: 8080
});

wss.on("connection", async (socket) => {
    const user = await prismaClient.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    socket.send("hi there you are connected to the server")
})