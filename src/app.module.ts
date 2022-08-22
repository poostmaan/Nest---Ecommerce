import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController, UserService } from './modules/user/';
import { ProductController, ProductService } from './modules/product/';
import { OrderController, OrderService } from './modules/order/';
import { CustomerController, CustomerService } from './modules/customer/';
import { CategoryController, CategoryService } from './modules/category/';
import { BrandController, BrandService } from './modules/brand/';

@Module({
  imports: [],
  controllers: [
    AppController,
    UserController,
    OrderController,
    CategoryController,
    ProductController,
    BrandController,
    CustomerController,
  ],
  providers: [
    AppService,
    UserService,
    OrderService,
    CategoryService,
    ProductService,
    BrandService,
    CustomerService,
  ],
})
export class AppModule {}
