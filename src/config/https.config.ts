import fs = require('fs');

export const httpsOptions = {
  key: fs.readFileSync('./src/cert/key.pem'),
  cert: fs.readFileSync('./src/cert/cert.pem'),
};
