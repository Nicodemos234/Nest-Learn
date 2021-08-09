import { Injectable } from '@nestjs/common';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  books: Book[] = [
    new Book('LIV01', 'Livro TDD e DDD na Prática', 29.9),
    new Book('LIV02', 'Iniciando com flutter', 239.9),
    new Book('LIV03', 'Inteligência artificial como serviço', 29.9),
  ];

  getAll(): Book[] {
    return this.books;
  }

  get(id: number): Book {
    return this.books[0];
  }

  create(book: Book) {
    this.books.push(book);
  }

  update(book: Book): Book {
    return book;
  }

  delete(id: number) {
    this.books.pop();
  }
}
