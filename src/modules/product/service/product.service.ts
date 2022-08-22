import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { CreateProductDTO, UpdateProductDTO } from '../../../dtos/product.dtos';

@Injectable()
export class ProductService {
    private counter = 1;
    private products: Product[] = [{
        id: 1,
        name: 'Rice',
        description: 'Clean rice for any purposes',
        stock: 100,
        price: 12.33,
    }];

    findAll() {
        return this.products;
    }

    findOne(id: number) {
        const product = this.products.find(item => item.id === id);
        if(!product) {
            throw new NotFoundException("Product not found")
        }

        return product;
    }

    create(payload: CreateProductDTO) {

        this.counter++;

        const newProduct = {
            id: this.counter,
            ...payload
        };

        // this.products = [ ...this.products, newProduct];
        this.products.push( newProduct );

        return { "message": "The product was created successfully"};
    }

    update(id: number, payload: UpdateProductDTO) {

        console.log(typeof id)
        const productIndex = this.products.findIndex(item => item.id === id);
        console.log(productIndex);

        if(productIndex > -1) {

            let newProduct = this.products[productIndex]

            newProduct = {
                ...newProduct,
                ...payload
            }

            return { "message": "Product modified", "product": newProduct }
        } 

        throw new HttpException("Product not found to update", HttpStatus.BAD_REQUEST);

    }

    delete(id: number) {

        const productIndex = this.products.findIndex(item => item.id === id);

        if(productIndex > -1) {
            this.products.splice(productIndex, 1);

            return { "message": "Product deleted" }
        } 

        return { "message": "Product was not found" }

    }

}
