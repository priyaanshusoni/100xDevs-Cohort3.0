"use strict";
// console.log("hi");
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
//event handler
wss.on("connection", function (socket) {
    console.log("User Connected");
    setInterval(() => {
        socket.send("Hello");
    }, 5000);
    socket.on("message", (e) => {
        if (e.toString() == "ping") {
            socket.send("pong");
        }
    });
});
