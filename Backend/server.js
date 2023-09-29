const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

app.get("/", (req, res)=>{
    res.send("HELLO, THE CURRICULUM COMPASS SERVER IS LIVE");
})

app.listen(process.env.SERVER_PORT, ()=>{
    console.log("Server start successful");
})