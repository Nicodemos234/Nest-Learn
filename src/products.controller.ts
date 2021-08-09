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

@Controller('products')
export class ProductsController {
  products: Product[] = [
    new Product('LIV01', 'Livro TDD e DDD na Prática', 29.9),
    new Product('LIV02', 'Iniciando com flutter', 239.9),
    new Product('LIV03', 'Inteligência artificial como serviço', 29.9),
  ];

  @Get()
  getAll(): Product[] {
    return this.products;
  }

  @Get(':id')
  get(@Param() params): Product {
    return this.products[0];
  }

  @Post()
  create(@Body() product: Product) {
    product.id;
    this.products.push(product);
  }

  @Put()
  update(@Body() product: Product): Product {
    return product;
  }

  @Delete(':id')
  delete(@Param() params) {
    this.products.pop();
  }
}
