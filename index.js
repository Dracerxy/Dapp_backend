const express = require('express');
const app=express();
const bodyparser =require("body-parser");
const dapp_server=require('./controller/dapp_server');
const cors = require('cors');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use("/dapp_server",dapp_server);

app.listen(4040,()=>{
    console.log("Server connected to port:4040")
})
