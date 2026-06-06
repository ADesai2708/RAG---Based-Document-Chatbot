import { S3Client } from "@aws-sdk/client-s3";
import { awsConfig } from "./aws.js";

export const s3Client = new S3Client(awsConfig);