const S3 = require('aws-sdk/clients/s3');
const { AWS_REGION, AWS_SECRET, AWS_KEY, AWS_BUCKET_NAME } = require('../config/constants');
const fs = require('fs');

const s3 = new S3({
  region: AWS_REGION,
  accessKeyId: AWS_KEY,
  secretAccessKey: AWS_SECRET,
});

exports.uploadFile = async (filepath, filename) => {
  const fileStream = fs.createReadStream(filepath);
  fileStream.on('error', error => {
    console.log(error);
    throw error;
  });
  const uploadParams = {
    Bucket: AWS_BUCKET_NAME,
    Body: fileStream,
    Key: filename,
  };
  return await s3.upload(uploadParams).promise();
};

exports.getFileStream = objectKey => {
  const downloadParams = {
    Key: objectKey,
    Bucket: AWS_BUCKET_NAME,
  };
  return s3
    .getObject(downloadParams)
    .createReadStream()
    .on('error', err => console.error(err));
};

exports.deleteObjects = async arrayOfObjectsKeys => {
  const deleteParams = {
    Bucket: AWS_BUCKET_NAME,
    Delete: {
      Objects: arrayOfObjectsKeys,
      Quiet: false,
    },
  };
  const result = await s3.deleteObjects(deleteParams).promise();
  return result;
};
