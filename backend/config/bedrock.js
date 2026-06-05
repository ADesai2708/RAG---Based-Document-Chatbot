import { BedrockRuntimeClient }
from "@aws-sdk/client-bedrock-runtime";

import { awsConfig } from "./aws.js";

export const bedrockClient =
  new BedrockRuntimeClient(awsConfig);