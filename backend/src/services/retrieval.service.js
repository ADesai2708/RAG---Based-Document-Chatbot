import {
  opensearchClient
}
from "../config/opensearch.js";

export const searchChunks =
async(
 embedding,
 userId
)=>{

 const result =
 await opensearchClient.search({

   index:"document_chunks",

   body:{
     size:5,

     query:{
       bool:{
         must:[
           {
             knn:{
               embedding:{
                 vector:embedding,
                 k:5
               }
             }
           }
         ],

         filter:[
           {
             term:{
               userId
             }
           }
         ]
       }
     }
   }
 });

 return result.body.hits.hits;
};