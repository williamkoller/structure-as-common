import {
  ExceptionInterface,
  FormatExceptionMessageInterface,
} from '../../domain/exception/exception.interface';
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ExceptionService implements ExceptionInterface {
  badRequestException(data: FormatExceptionMessageInterface): void {
    throw new BadRequestException(data);
  }

  internalServerErrorException(data?: FormatExceptionMessageInterface): void {
    throw new InternalServerErrorException(data);
  }

  forbiddenException(data?: FormatExceptionMessageInterface): void {
    throw new ForbiddenException(data);
  }

  unauthorizedException(data?: FormatExceptionMessageInterface): void {
    throw new UnauthorizedException(data);
  }

  conflictException(data?: FormatExceptionMessageInterface): void {
    throw new ConflictException(data);
  }

  notFoundException(data?: FormatExceptionMessageInterface): void {
    throw new NotFoundException(data);
  }
}
