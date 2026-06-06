import {
  PutObjectCommand
}
from "@aws-sdk/client-s3";

import { s3Client }
from "../config/s3.js";

export const uploadToS3 = async (
  key,
  buffer
) => {

  await s3Client.send(
    new PutObjectCommand({
      Bucket:
        process.env.S3_BUCKET_NAME,
      Key: key,
      Body: buffer
    })
  );
};