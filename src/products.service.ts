import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [
    new Product('LIV01', 'Livro TDD e DDD na Prática', 29.9),
    new Product('LIV02', 'Iniciando com flutter', 239.9),
    new Product('LIV03', 'Inteligência artificial como serviço', 29.9),
  ];

  getAll(): Product[] {
    return this.products;
  }

  get(id: number): Product {
    return this.products[0];
  }

  create(product: Product) {
    this.products.push(product);
  }

  update(product: Product): Product {
    return product;
  }

  delete(id: number) {
    this.products.pop();
  }
}
