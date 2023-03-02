import { DynamicModule, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './logging.interceptor';
import { TimeoutInterceptor } from './timeout.interceptor';

@Module({})
export class InterceptorsModule {
  static register(): DynamicModule {
    return {
      module: InterceptorsModule,
      providers: [
        {
          provide: APP_INTERCEPTOR,
          useClass: LoggingInterceptor,
        },
        {
          provide: APP_INTERCEPTOR,
          useClass: TimeoutInterceptor,
        },
      ],
      exports: [LoggingInterceptor, TimeoutInterceptor],
    };
  }
}
