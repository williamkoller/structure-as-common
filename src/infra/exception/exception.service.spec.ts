import {
  BadRequestException,
  ForbiddenException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ExceptionService } from './exception.service';

describe('ExceptionService', () => {
  let service: ExceptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExceptionService],
    }).compile();

    service = module.get<ExceptionService>(ExceptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be called badRequestException', () => {
    const data = {
      message: 'Bad Request',
      code_error: 400,
    };

    jest
      .spyOn(service, 'badRequestException')
      .mockImplementation(() => new BadRequestException(data));

    expect(service.badRequestException(data)).toMatchObject(
      new BadRequestException(data)
    );
  });

  it('should be called internalServerErrorException', () => {
    const data = {
      message: 'Bad Request',
      code_error: 400,
    };
    jest
      .spyOn(service, 'internalServerErrorException')
      .mockImplementation(() => new InternalServerErrorException(data));

    expect(service.internalServerErrorException(data)).toMatchObject(
      new InternalServerErrorException(data)
    );
  });
  it('should be called forbiddenException', () => {
    const data = {
      message: 'Bad Request',
      code_error: 400,
    };
    jest
      .spyOn(service, 'forbiddenException')
      .mockImplementation(() => new ForbiddenException(data));

    expect(service.forbiddenException(data)).toMatchObject(
      new ForbiddenException(data)
    );
  });
  it('should be called unauthorizedException', () => {
    const data = {
      message: 'Bad Request',
      code_error: 400,
    };
    jest
      .spyOn(service, 'unauthorizedException')
      .mockImplementation(() => new UnauthorizedException(data));

    expect(service.unauthorizedException(data)).toMatchObject(
      new UnauthorizedException(data)
    );
  });
});
