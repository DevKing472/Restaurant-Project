import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { product } from '../mock/product.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getAll(): Observable<Product[]> {
    return of(product);
  }
}
