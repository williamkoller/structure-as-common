import { DynamicModule, Module } from '@nestjs/common';
import { HttpExceptionFilter } from './http-exception.filter';

@Module({})
export class HttpExceptionFilterModule {
  static register(): DynamicModule {
    return {
      module: HttpExceptionFilterModule,
      providers: [HttpExceptionFilter],
      exports: [HttpExceptionFilter],
    };
  }
}
