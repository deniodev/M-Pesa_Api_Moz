const express = require("express");

const app = express();

app.listen(5000, () => {
    console.log("server run nicely");
});

app.get("/", (req, res) => {
    res.send("Mpesa in progress");
});