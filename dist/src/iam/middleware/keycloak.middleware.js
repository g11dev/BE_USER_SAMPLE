"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupKeycloak = setupKeycloak;
const express_openid_connect_1 = require("express-openid-connect");
const keycloak_config_1 = require("../../config/keycloak.config");
function setupKeycloak(app) {
    app.use((0, express_openid_connect_1.auth)(keycloak_config_1.keycloakConfig));
    app.use((req, res, next) => {
        if (req.session) {
        }
        next();
    });
}
//# sourceMappingURL=keycloak.middleware.js.map