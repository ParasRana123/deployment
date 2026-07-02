import  express from "express";
import { prismaClient } from "@repo/db/client";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, "../../../.env"),
});


const app = express();
app.use(express.json());

app.get("/hi", (req, res) => {
    res.send({
        message: "hi there!"
    })
})

app.post("/signup", async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await prismaClient.user.create({
        data: {
            username: username,
            password: password
        }
    })


    res.json({
        message: "signup successfull!",
        id:user.id
    })
})


app.listen(3002, () => {
    console.log("server listening on the port 3002");
})