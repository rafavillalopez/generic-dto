import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle(process.env.npm_package_name)
    .setVersion(process.env.npm_package_version)
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      defaultModelsExpandDepth: -1,
      tagsSorter: 'alpha',
      operationsSorter: function (a: any, b: any) {
        const order = {
          post: '0',
          get: '1',
          patch: '2',
          put: '3',
          delete: '4',
        };
        return order[a.get('method')].localeCompare(order[b.get('method')]);
      },
    },
  });

  await app.listen(3000);
}
bootstrap();
