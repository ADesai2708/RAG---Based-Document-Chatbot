import {
 askQuestion
}
from "../services/chat.service.js";

export const ask =
async(req,res)=>{

 try{

   const {question}
   = req.body;

   const context =
   await askQuestion(
     question,
     req.user.userId
   );

   res.json({
     success:true,
     context
   });

 }
 catch(error){

   res.status(500).json({
     success:false
   });
 }
};