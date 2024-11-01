const express= require("express");
const mongoose = require("mongoose");
const app = express();
const Chat= require("./model/chat.js");
 app.set("view engine", "ejs")
 app.use(express.urlencoded({extended:true}));


const port = 8000;
app.listen(port,() => {
    console.log("server running");
});
 main().then(() => {
    console.log("connected");
 }).catch((err) => {
    console.log(err);
 });
  async function main () {
    await mongoose.connect("mongodb://127.0.0.1:27017/myApp");
  }



// app.get("/:username",(req,res) => {
//     let {username} = req.params;
//     const instaData = require("./data.json");
//     let data = instaData[username];
//     res.render("home", {data: data});
// });

// let chat1 = new Chat({
//     from: "Shahnwaz",
//     to: "ahamad",
//     msg: "keep trying",
//     created_at: new Date()
// });
// chat1.save().then((res)=> {
//     console.log(res);
// });

// index routes 
app.get("/chats", async(req,res) => {
    let chats = await Chat.find();
    res.render("index.ejs",{chats:chats});
});

// new routes

app.get("/chats/new", (req,res) => {
    res.render("new.ejs");
});
 // storing in database
 app.post("/chats",(req,res) => {
    let {from,to,msg} = req.body;
    let chat = new Chat ({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    chat.save().then(() => {
        console.log("chat saved")
    }).catch((err) => {
        console.log(err);
    });
    res.redirect("/chats");
 })