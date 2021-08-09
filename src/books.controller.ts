import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './book.model';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getAll(): Book[] {
    return this.booksService.getAll();
  }

  @Get(':id')
  get(@Param() params): Book {
    return this.booksService.get(params.id);
  }

  @Post()
  create(@Body() book: Book) {
    this.booksService.create(book);
  }

  @Put()
  update(@Body() book: Book): Book {
    return this.booksService.update(book);
  }

  @Delete(':id')
  delete(@Param() params) {
    this.booksService.delete(params.id);
  }
}
