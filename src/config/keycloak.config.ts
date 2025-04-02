export const keycloakConfig = {
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

export const keycloakConfigPassport = {
  issuer: `${keycloakConfig.issuerBaseURL}`,
  clientID: `${keycloakConfig.clientID}`,
  clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
  tokenURL: `${keycloakConfig.issuerBaseURL}/protocol/openid-connect/token`,
  authorizationURL: `${keycloakConfig.issuerBaseURL}/protocol/openid-connect/auth`,
  userInfoURL: `${keycloakConfig.issuerBaseURL}/protocol/openid-connect/userinfo`,
  // callbackURL: `${keycloakConfig.baseURL}/auth/callbacklogin`,
};

//   issuer: keycloakConfigPassport.issuer,
//   userInfoURL: `${keycloakConfigPassport.issuer}/protocol/openid-connect/userinfo`,
//   clientSecret: keycloakConfig.clientSecret,
//   tokenURL: `${keycloakConfigPassport.issuer}/protocol/openid-connect/token`,
//   authorizationURL: `${keycloakConfigPassport.issuer}/protocol/openid-connect/auth`,
//   callbackURL: keycloakConfigPassport.callbackUrl,
