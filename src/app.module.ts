import { APP_PIPE } from '@nestjs/core';
import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { PlayerModule } from './modules/player/player.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env.local',
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService<EnvConfig.Vars>) => ({
        uri: configService.get('MONGO_URL_CONNECT'),
        useNewUrlParser: true,
        useCreateIndex: true,
      }),
      inject: [ConfigService],
    }),
    PlayerModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
