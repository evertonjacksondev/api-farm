import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';
import { cpf, cnpj } from 'cpf-cnpj-validator';

export function IsValidCpf(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValidCpf',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return value ? cpf.isValid(value) : true;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} is not a valid CPF`;
        },
      },
    });
  };
}

export function IsValidCnpj(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValidCnpj',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return value ? cnpj.isValid(value) : true;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} is not a valid CNPJ`;
        },
      },
    });
  };
}
