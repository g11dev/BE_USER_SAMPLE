import { auth } from 'express-openid-connect';
import { keycloakConfig } from '../../config/keycloak.config';

export function setupKeycloak(app) {
  app.use(auth(keycloakConfig));
  app.use((req, res, next) => {
    next();
  });
}
