const express = require("express");
const session = require("express-session");
const router = require("./routers/router.js");

const server = express();

server.use(express.json());

server.use(session({
    resave: false,
    saveUninitialized: false, 
    secret: "string"
}))
server.use("/api", router);
module.exports = server;
