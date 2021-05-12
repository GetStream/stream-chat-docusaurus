
const recursive = require('recursive-readdir'); // eslint-disable-line import/no-extraneous-dependencies
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const bucket = process.env.AWS_S3_BUCKET;

// Recursively read all html files generate by docusaurus and generate a S3 friendly cp command for them without .html extension
recursive('./', ['page-data', 'static', 'images', '.DS_Store', '*.js', '*.map', '*.css'])
  .then((files) => {
    files
      .filter((file) => file.endsWith('.html') && file !== 'index.html')
      .forEach((file) => {
        let path = file.replace('.html', '');
        if (path.endsWith('index')) path = path.slice(0, -5);
        if (!path.endsWith('/')) path = `${path}/`;

        s3.copyObject({
          Bucket: bucket,
          CopySource: `/${bucket}/${file}`,
          Key: path,
          ContentType: 'text/html',
        })
          .promise()
          .then(() => console.log('path: ', path))
          .catch((err) => console.error('error: ', `path: ${path}, bucket: ${bucket}, file: ${file}`, err));
      });
  })
  .catch((error) => {
    console.error('something went wrong', error);
    process.exit(1);
  });