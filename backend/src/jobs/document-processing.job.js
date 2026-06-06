import { extractText }
from "../services/pdf.service.js";

import { chunkText }
from "../utils/chunker.js";

import { generateEmbedding }
from "../services/embedding.service.js";

import { saveChunk }
from "../services/opensearch.service.js";

export const processDocument =
async (
 documentId,
 userId,
 buffer
)=>{

 const text =
   await extractText(buffer);

 const chunks =
   chunkText(text);

 for(const chunk of chunks){

   const embedding =
     await generateEmbedding(chunk);

   await saveChunk({

      documentId,
      userId,

      content:chunk,

      embedding
   });
 }
};