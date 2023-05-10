const express = require("express");
const app = express();

const Flatdata = require("./models/flatdatas");
require("./db/conn");

const flatdataRouter = require("./router/flatdata");



const port = process.env.PORT || 5000;

app.use(express.json());

app.use(flatdataRouter);

// app.post("/flat", (req, res) => {
//     res.send("hello");
// })

// app.get("/", (req, res) => {
//     res.send("hello")
// })

app.listen(port, () => {
    console.log(`connection is setup ar ${port}`);
})