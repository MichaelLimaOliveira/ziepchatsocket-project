import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response)  => {
  return res.json({
    message: "Work websocket backend",
  });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
