import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ValidationParamsPipe } from './validation-params.pipe';

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationParamsPipe,
    },
  ],
  exports: [ValidationParamsPipe],
})
export class PipesModule {}
