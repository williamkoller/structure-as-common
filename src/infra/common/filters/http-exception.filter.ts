import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { LoggerService } from './../../../infra/logger/logger.service';

interface ErrorInterface {
  message: string;
  codeError: string;
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: LoggerService) {}
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const message =
      exception instanceof HttpException
        ? (exception.getResponse() as ErrorInterface)
        : { message: (exception as Error).message, codeError: null };

    const responseData = {
      ...{
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      },
      ...message,
    };

    this.logMessage(request, message, status, exception);

    response.status(status).json(responseData);
  }

  private logMessage(
    request: Request,
    message: ErrorInterface,
    status: number,
    exception: HttpException
  ) {
    if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
      this.logger.error(
        `End Request for ${request.path}`,
        `method=${request.method} status=${status} codeError=${
          message.codeError ? message.codeError : null
        } message=${message.message ? message.message : null}`,
        status >= HttpStatus.INTERNAL_SERVER_ERROR ? exception.stack : ''
      );
    } else {
      this.logger.warn(
        `End Request for ${request.path}`,
        `method=${request.method} status=${status} codeError=${
          message.codeError ? message.codeError : null
        } message=${message.message ? message.message : null}`
      );
    }
  }
}
