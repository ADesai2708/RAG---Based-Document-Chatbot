import {
 InvokeModelCommand
}
from "@aws-sdk/client-bedrock-runtime";

import {
 bedrockClient
}
from "../config/bedrock.js";

export const generateAnswer =
async(
 context,
 question
)=>{

 const prompt = `
 Context:

 ${context}

 Question:

 ${question}

 Answer only from context.
 `;

 const command =
 new InvokeModelCommand({

   modelId:
   process.env.BEDROCK_CHAT_MODEL,

   contentType:
   "application/json",

   body: JSON.stringify({

     messages:[
       {
         role:"user",
         content:prompt
       }
     ],

     max_tokens:1000
   })
 });

 const response =
 await bedrockClient.send(
   command
 );

 return response;
};