import {
  InvokeModelCommand
}
from "@aws-sdk/client-bedrock-runtime";

import {
  bedrockClient
}
from "../config/bedrock.js";

export const generateEmbedding =
async(text)=>{

  const command =
    new InvokeModelCommand({

      modelId:
        process.env
          .BEDROCK_EMBEDDING_MODEL,

      contentType:
        "application/json",

      body: JSON.stringify({
        inputText:text
      })
    });

  const response =
    await bedrockClient.send(
      command
    );

  const body =
    JSON.parse(
      new TextDecoder()
      .decode(response.body)
    );

  return body.embedding;
};