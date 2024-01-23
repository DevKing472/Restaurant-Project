import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { CategoryService } from '../services/shared/category.service';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

@NgModule({
  declarations: [ProductComponent, ProductDetailsComponent],
  imports: [CommonModule],
  exports: [ProductComponent],
  providers: [CategoryService],
})
export class ComponentsModule {}
