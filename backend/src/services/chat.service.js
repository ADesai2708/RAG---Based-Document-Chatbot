import {
 generateEmbedding
}
from "./embedding.service.js";

import {
 searchChunks
}
from "./retrieval.service.js";

export const askQuestion =
async(
 question,
 userId
)=>{

 const questionEmbedding =
 await generateEmbedding(question);

 const chunks =
 await searchChunks(
   questionEmbedding,
   userId
 );

 const context =
 chunks
   .map(
    item=>item._source.content
   )
   .join("\n");

 return context;
};