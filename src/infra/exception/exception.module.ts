import { DynamicModule, Module } from '@nestjs/common';
import { ExceptionService } from './exception.service';

@Module({})
export class ExceptionModule {
  static register(): DynamicModule {
    return {
      module: ExceptionModule,
      providers: [ExceptionService],
      exports: [ExceptionService],
    };
  }
}
