import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export const generatePreSignedUrl = (key: string) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME!,
    Key: key,
    Expires: 60 * 5,
  };

  return s3.getSignedUrl('putObject', params);
};
