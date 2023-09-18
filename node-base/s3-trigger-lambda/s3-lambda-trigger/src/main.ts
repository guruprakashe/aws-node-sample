import { NestFactory } from '@nestjs/core';
import { Callback, Context, Handler } from 'aws-lambda';
import { AppModule } from './app.module';
import { AppService } from './app.service';
declare const module: any;

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  console.log(`event - ${JSON.stringify(event)}`);
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const eventsService = appContext.get(AppService);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => appContext.close());
  }
  return eventsService.getHello();
};
