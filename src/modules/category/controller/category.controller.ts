import { Controller, Get, Param, Query } from '@nestjs/common';

interface CategoriesPaginationParams {
    limit?: number;
    offset?: number;
    brand: string;
  }

@Controller('categories')
export class CategoryController {
  @Get()
  getCategories(@Query('') params: CategoriesPaginationParams): string {
    const { limit = 100, offset = 0, brand } = params;
    // return this.appService.getHello();
    return `${limit} ${offset} ${brand}`;
  }

  @Get(':category/products/:id')
  getProductWithinCategory(
    @Param('category') category: number,
    @Param('id') id: any,
  ): string {
    // return this.appService.getHello();
    return `${category} ${id}`;
  }
}
