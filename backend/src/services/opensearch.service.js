import {
  opensearchClient
}
from "../config/opensearch.js";

export const saveChunk =
async(data)=>{

  await opensearchClient.index({

    index:"document_chunks",

    body:data
  });
};