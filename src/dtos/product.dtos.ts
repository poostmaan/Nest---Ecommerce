// Class validator nos ofrece las herramientas para realizar las validaciones de los DTOS en tiempo de ejecucion

import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNumber, IsNotEmpty, IsDecimal } from 'class-validator';

export class CreateProductDTO {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    readonly stock: number;

    @IsNumber()
    @IsNotEmpty()
    readonly price: number;
}

// export class UpdateProductDTO {
//     readonly name ?: string;
//     readonly description ?: string;
//     readonly stock ?: number;
//     readonly price ?: number;
// }



// Estamos declarando que UpdateProduct tendra los mismo decoradores de validacion
// pero de manera que no sean totalmente necesarios 
export class UpdateProductDTO extends PartialType(CreateProductDTO) {}

// Los DTOS ( Data Transfer Object ) realizan la principal tarea de dejar en claro que atributos necesitas para un peticion

// Sus 3 funciones principales son
// 1. Proteger los datos
// 2. Validar y tipas los datos
// 3. Evitar hacer una referencia a un clave que no existe