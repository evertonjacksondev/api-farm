"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidCpf = IsValidCpf;
exports.IsValidCnpj = IsValidCnpj;
const class_validator_1 = require("class-validator");
const cpf_cnpj_validator_1 = require("cpf-cnpj-validator");
function IsValidCpf(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isValidCpf',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    return value ? cpf_cnpj_validator_1.cpf.isValid(value) : true;
                },
                defaultMessage(args) {
                    return `${args.property} is not a valid CPF`;
                },
            },
        });
    };
}
function IsValidCnpj(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isValidCnpj',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    return value ? cpf_cnpj_validator_1.cnpj.isValid(value) : true;
                },
                defaultMessage(args) {
                    return `${args.property} is not a valid CNPJ`;
                },
            },
        });
    };
}
//# sourceMappingURL=cpf-cnpj.validator.js.map