import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Category } from 'src/app/model/category';
import { Foods } from 'src/app/model/food';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/shared/category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public products$: Observable<Product[]> = this.productService.getAll();
  public categories$: Observable<Category[]> = this.categoryService.getAll();
  public productSelected$: any | null;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    console.log(this.productSelected$);
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.products$.pipe(
      map((products: Product[]) =>
        products.filter((product) => product.categoryId === categoryId)
      )
    );
  }

  productDetails(productId: number): void {
    this.productSelected$ = this.products$.pipe(
      map((product: Product[]) =>
        product.filter((product) => product.id === productId)
      )
    );
  }
}
