import dotenv from "dotenv"
dotenv.config();
import express from "express";



const app = express();
const PORT = process.env.PORT || 3001;
console.log(PORT);




app.get("/",(req,res)=>{
    
    res.status(200).json({
        success:true,
        message:"Hii from tss-node!!!"
    })
})


app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})