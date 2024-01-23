import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() productSelected$: Observable<Product[]> | undefined;
  public productDetail: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    this.productData();
  }

  productData() {
    this.productSelected$?.subscribe({
      next: (product: Product[]) => {
        console.log(product);
        this.productDetail = product;
      },
      error: (error: Error) => {
        this.productDetail = [];
        console.error(error);
      },
    });
  }
}
