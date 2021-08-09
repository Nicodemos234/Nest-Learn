import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'List all products';
  }

  @Get(':id')
  get(@Param() params): string {
    return `Um produto do ${params.id}`;
  }

  @Post()
  create(@Body() produto): string {
    console.log(produto);
    return `Produto criado`;
  }

  @Put()
  update(@Body() produto): string {
    console.log(produto);
    return `Produto alterado`;
  }

  @Delete(':id')
  delete(@Param() params): string {
    return `Apaga o produto ${params.id}`;
  }
}
