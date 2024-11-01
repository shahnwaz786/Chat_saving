const mongoose = require("mongoose");
const Chat= require("./model/chat.js");

main().then(() => {
    console.log("connected");
 }).catch((err) => {
    console.log(err);
 });
  async function main () {
    await mongoose.connect("mongodb://127.0.0.1:27017/myApp");
  }


  allChats = [{
    from:"Shahnwaz",
    to:"ahamad",
    msg:"hello",
    created_at: Date()
  },
  {
    from:"Shahnwaz",
    to:"ahamad",
    msg:"hello",
    created_at: Date()
  },
  {
    from:"Shahnwaz",
    to:"ahamad",
    msg:"hello",
    created_at: Date()
  },
  {
    from:"Shahnwaz",
    to:"ahamad",
    msg:"hello",
    created_at: Date()
  },
  {
    from:"Shahnwaz",
    to:"ahamad",
    msg:"hello",
    created_at: Date()
  }];


  Chat.insertMany(allChats);