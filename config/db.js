const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();


url="mongodb+srv://saumiltiwari14:Neetu123@cluster0.hvqisxv.mongodb.net/Cluster0?retryWrites=true&w=majority";


mongoose.connect(url , (err)=>{
if (err)
{
    console.log(err)
}
else
{
    console.log("connected Success")
}

} )
