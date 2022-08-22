import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ProductService } from '../service/product.service';
import { ParseIntPipe as MyOwnParseInt } from '../../../common/parse-int.pipe';
import { CreateProductDTO, UpdateProductDTO } from '../../../dtos/product.dtos';

interface Product {
  name: string,
  price: number
}

@Controller('products')
export class ProductController {

  constructor(private productService: ProductService) {};

  @Get(':id')
  // Sucede que hay que definir parseIntPipe ya que al transpilar de TS a JS
  // el parametro id quedaria como un string, si resulta en string no funcionaria nuestro metodo en el servicio
  // por eso se parsea mediante la funcion parseIntPipe

  getProduct(@Param('id', MyOwnParseInt ) id: number) {
    // return this.appService.getHello();
    // return `${JSON.stringify(params)}`;
    return this.productService.findOne(id);
  }

  @Get('')
  getProductsWithQueries(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return this.appService.getHello();
    // return `${limit} ${offset} ${brand}`;
    return this.productService.findAll();
  }

  @Post()
  // @HttpCode(202) // Regresar un codigo segun a nuestro antojo
  createProduct(
    //@Res() res: Response, 
    @Body() payload: CreateProductDTO) {

      // return res.status(HttpStatus.CREATED).json({
      //   message: "Product created",
      //   payload: payload,
      // })

      return this.productService.create(payload);

    // O se puede regresar libremente 
    // return {
    //   status: 200,
    //   response: payload,
    // };
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDTO
  ) {

    // res.status( HttpStatus.OK ).json({
    //   "message": "Product modified",
    //   "name": payload.name,
    //   "price": payload.price
    // })

    return this.productService.update(id, payload);

  }

  @Delete(':id')
  delete(
    @Param('id', ParseIntPipe ) id: number
  ) {

    // res.status( HttpStatus.OK ).json({
    //   "message": "Product modified",
    //   "deleted": true, // Lanzar un booleano indicando si se ha logrado eliminar
    //   "count": 1 // Es bueno registrar un conteno sobre cuantos registro han sido eliminados
    // })

    return this.productService.delete(id);

  }


  // @Get('products')
  // getProducts(
  //   @Query(
  //     'limit',
  //     new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
  //   )
  //   limit = 100,
  //   @Query(
  //     'offset',
  //     new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
  //   )
  //   offset = 0,
  //   @Query('brand') brand: string,
  // ) {
  //   return `Product: Brand->${brand} Limit->${limit}. Offset ->${offset}`;
  // }
}
