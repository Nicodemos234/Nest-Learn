import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAll(): Product[] {
    return this.productsService.getAll();
  }

  @Get(':id')
  get(@Param() params): Product {
    return this.productsService.get(params.id);
  }

  @Post()
  create(@Body() product: Product) {
    this.productsService.create(product);
  }

  @Put()
  update(@Body() product: Product): Product {
    return this.productsService.update(product);
  }

  @Delete(':id')
  delete(@Param() params) {
    this.productsService.delete(params.id);
  }
}
