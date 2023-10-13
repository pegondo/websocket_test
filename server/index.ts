import {
  WebSocketClient,
  WebSocketServer,
} from "https://deno.land/x/websocket@v0.1.4/mod.ts";

const sleep = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const wss = new WebSocketServer(8080);

wss.on("connection", (ws: WebSocketClient) => {
  ws.on("message", async (message: string) => {
    ws.send(`${message} - Received!`); // Send message with its own message.
    await sleep(3000); // Wait 3 seconds.
    ws.send("Three seconds later..."); // Send one more message.
  });
});

console.log("Ready!");
