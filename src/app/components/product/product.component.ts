import { Component, OnInit } from '@angular/core';
import { Foods } from 'src/app/model/food';
import { FoodService } from 'src/app/services/food.service';
import { CategoryService } from 'src/app/services/shared/category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public foods: Foods[] = [];
  public categories$ = this.categoryService.getAll();

  constructor(
    private food: FoodService,
    private categoryService: CategoryService
  ) {
    console.log(this.categories$);
  }

  ngOnInit(): void {
    this.foods = this.food.getAll();
  }
}
