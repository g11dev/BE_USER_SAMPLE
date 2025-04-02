import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('k3p')
  .setDescription('The k3p API description')
  .setVersion('0.1')
  .addBearerAuth() // Questo abilita il pulsante Authorize
  .build();
