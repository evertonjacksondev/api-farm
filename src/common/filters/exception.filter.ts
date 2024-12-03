import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
} from '@nestjs/common';

@Catch(BadRequestException)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const message = exception.getResponse();
    response.status(400).json({
      statusCode: 400,
      message: message['message'],
      error: 'Bad Request',
    });
  }
}
