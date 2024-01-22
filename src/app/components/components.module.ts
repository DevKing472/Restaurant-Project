import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { CategoryService } from '../services/shared/category.service';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule],
  exports: [ProductComponent],
  providers: [CategoryService],
})
export class ComponentsModule {}
