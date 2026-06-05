import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { awsConfig } from "./aws.js";

const client = new DynamoDBClient(awsConfig);

export const dynamodb =
  DynamoDBDocumentClient.from(client);