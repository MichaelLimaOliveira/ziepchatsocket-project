import "reflect-metadata";
import express, { Request, Response } from "express";
import path from "path";
import { createServer } from "http";
import { Server } from "socket.io";
import mongoose from "mongoose"

const app = express();

const server = createServer(app);

mongoose.connect("mongodb://127.0.0.1:27017/ziepchatdb")

app.use(express.static(path.join(__dirname, "..", "public")));

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Socket", socket.id);
});

app.get("/", (req: Request, res: Response)  => {
  return res.json({
    message: "Work websocket backend",
  });
});

export { server, io };
