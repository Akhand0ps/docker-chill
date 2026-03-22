import express from "express";
import dotenv from "dotenv"
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001

app.get("/",(req,res)=>{

    res.status(200).json({
        success:true,
        message:"All is Well!!"
    })
    return;
})




app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})