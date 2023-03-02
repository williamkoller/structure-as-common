import { Module } from '@nestjs/common';
import { ExceptionService } from './exception.service';

@Module({
  providers: [ExceptionService]
})
export class ExceptionModule {}
