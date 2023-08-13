const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const port = 4000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DB 연결 성공");
    })
    .catch(err => {
        console.error(err);
    });

app.get("/", (req, res, next) => {
    res.send("Hello World!");
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.use("/users", require("./routes/users"));

app.use(express.static(path.join(__dirname, "../uploads")));

app.listen(port, () => {
    console.log(`${port} port start`);
});
