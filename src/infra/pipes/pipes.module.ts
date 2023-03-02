import { DynamicModule, Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ValidationParamsPipe } from './validation-params.pipe';

@Module({})
export class PipesModule {
  static register(): DynamicModule {
    return {
      module: PipesModule,
      providers: [
        {
          provide: APP_PIPE,
          useClass: ValidationParamsPipe,
        },
      ],
      exports: [ValidationParamsPipe],
    };
  }
}
