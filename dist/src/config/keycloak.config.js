"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keycloakConfigPassport = exports.keycloakConfig = void 0;
exports.keycloakConfig = {
    issuerBaseURL: process.env.KEYCLOAK_ISSUER_BASE_URL,
    baseURL: process.env.KEYCLOAK_BASE_URL,
    clientID: process.env.KEYCLOAK_CLIENT_ID,
    clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
    secret: process.env.KEYCLOAK_SECRET,
    authRequired: process.env.KEYCLOAK_AUTH_REQUIRED === 'true',
    idpLogout: process.env.KEYCLOAK_IDP_LOGOUT === 'true',
    authorizationParams: {
        response_type: process.env.KEYCLOAK_RESPONSE_TYPE,
        scope: process.env.KEYCLOAK_SCOPE,
    },
};
exports.keycloakConfigPassport = {
    issuer: `${exports.keycloakConfig.issuerBaseURL}`,
    clientID: `${exports.keycloakConfig.clientID}`,
    clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
    tokenURL: `${exports.keycloakConfig.issuerBaseURL}/protocol/openid-connect/token`,
    authorizationURL: `${exports.keycloakConfig.issuerBaseURL}/protocol/openid-connect/auth`,
    userInfoURL: `${exports.keycloakConfig.issuerBaseURL}/protocol/openid-connect/userinfo`,
};
//# sourceMappingURL=keycloak.config.js.map