
const recursive = require('recursive-readdir'); // eslint-disable-line import/no-extraneous-dependencies
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const bucket = process.env.AWS_S3_BUCKET.replace('s3://', '').slice(0, -1);
const build_path = process.env.DOCUSAURUS_BUILD_PATH;

// Recursively read all html files generate by docusaurus and generate a S3 friendly cp command for them without .html extension
recursive(build_path, ['assets', 'img', 'images', '.DS_Store', '*.txt', '*.js', '*.map', '*.css'])
  .then((files) => {
    files
      .filter((file) => file.endsWith('.html') && file !== 'index.html')
      .forEach((file_path) => {
        const file = file_path.replace(build_path, '');
        let path = file.replace('.html', '');
        if (path.endsWith('index')) path = path.slice(0, -5);
        if (!path.endsWith('/')) path = `${path === '' ? 'sdk' : path}/`;

        s3.copyObject({
          Bucket: path === 'sdk/' ? bucket.replace('/sdk', '') : bucket,
          CopySource: `/${bucket}/${file}`,
          Key: path,
          ContentType: 'text/html',
        })
          .promise()
          .then(() => console.log('path: ', path))
          .catch((err) => console.error('error: ', `path: ${path}, bucket: ${bucket}`, err));
      });
  })
  .catch((error) => {
    console.error('something went wrong', error);
    process.exit(1);
  });