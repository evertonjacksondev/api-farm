import { registerDecorator, } from 'class-validator';
import { cpf, cnpj } from 'cpf-cnpj-validator';
export function IsValidCpf(validationOptions) {
    return function (object, propertyName) {
        registerDecorator({
            name: 'isValidCpf',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    return value ? cpf.isValid(value) : true;
                },
                defaultMessage(args) {
                    return `${args.property} is not a valid CPF`;
                },
            },
        });
    };
}
export function IsValidCnpj(validationOptions) {
    return function (object, propertyName) {
        registerDecorator({
            name: 'isValidCnpj',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    return value ? cnpj.isValid(value) : true;
                },
                defaultMessage(args) {
                    return `${args.property} is not a valid CNPJ`;
                },
            },
        });
    };
}
//# sourceMappingURL=cpf-cnpj.validator.js.map