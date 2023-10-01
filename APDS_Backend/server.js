const https = require('https');
const fs = require('fs');
const app = require('./index');


const port = 3000;

const options = {
    key: fs.readFileSync('Keys/privatekey.pem'),
    cert: fs.readFileSync('Keys/certificate.pem')
  };

const server = https.createServer(options, app);

server.listen(port, () => {
    console.log(`Server running at https://localhost:${port}/`);
  });