import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    CacheModule.registerAsync({
      async useFactory() {
        return {
          store: {
            get<T>(): Promise<T | undefined> | T | undefined {
              console.log('Trying to get cache');
              return 'Cached value' as T;
            },
            set(): Promise<void> | void {
              console.log('Trying to set cache');
              return;
            },
          },
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
