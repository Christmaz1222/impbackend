import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.use(morgan('dev'));
  console.log(configService.get('PORT')); 

  const port = configService.get('PORT') || 6000;
  //await app.listen(port);
  console.log(`Application running on: http://localhost:${port}/api`);
  app.setGlobalPrefix('api');

  const server = await app.listen(port);
  //console.log(app.getHttpAdapter().getInstance()._router.stack.map(layer => layer.route && layer.route.path));

  
}
bootstrap();
