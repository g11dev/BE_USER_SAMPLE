"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpsOptions = void 0;
const fs = require("fs");
exports.httpsOptions = {
    key: fs.readFileSync('./src/cert/key.pem'),
    cert: fs.readFileSync('./src/cert/cert.pem'),
};
//# sourceMappingURL=https.config.js.map