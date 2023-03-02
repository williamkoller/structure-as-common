import { DynamicModule, Module } from '@nestjs/common';
import { HttpExceptionFilter } from './infra/common/filters/http-exception.filter';
import { ExceptionModule } from './infra/exception/exception.module';
import { ExceptionService } from './infra/exception/exception.service';
import { InterceptorsModule } from './infra/interceptors/interceptors.module';
import { LoggerModule } from './infra/logger/logger.module';
import { LoggerService } from './infra/logger/logger.service';
import { PipesModule } from './infra/pipes/pipes.module';

@Module({
  providers: [LoggerService, ExceptionService, HttpExceptionFilter],
  exports: [LoggerService, ExceptionService, HttpExceptionFilter],
  imports: [LoggerModule, ExceptionModule, InterceptorsModule, PipesModule],
})
export class StructureAsCommonModule {
  static register(): DynamicModule {
    return {
      module: StructureAsCommonModule,
      providers: [LoggerService, ExceptionService, HttpExceptionFilter],
      exports: [LoggerService, ExceptionService, HttpExceptionFilter],
      imports: [LoggerModule, ExceptionModule, InterceptorsModule, PipesModule],
    };
  }
}
