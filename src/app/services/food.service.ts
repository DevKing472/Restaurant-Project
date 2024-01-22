import { Injectable } from '@angular/core';
import { Foods } from '../model/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Foods[] {
    return [
      {
        foodId: 1,
        categoryId: 1,
        foodName: 'Pollo con papas fritas',
        foodImg: '../assets/1.jpg',
        foodPrice: 1500,
        foodDescription:
          'Pollo al horno con hierbas aromáticas y papas al horno',
        foodTime: 45,
        foodPreferences: '',
        foodHealth: '',
        tags: ['carne', 'grill'],
      },
      {
        foodId: 2,
        categoryId: 1,
        foodName: 'Hamburguesa a la mediterranea',
        foodImg: '../assets/2.jpg',
        foodPrice: 1500,
        foodDescription:
          'Pollo al horno con hierbas aromáticas y papas al horno',
        foodTime: 45,
        foodPreferences: '',
        foodHealth: '',
        tags: ['carne', 'grill'],
      },
      {
        foodId: 3,
        categoryId: 3,
        foodName: 'Sopa de pollo y calabaza',
        foodImg: '../assets/3.jpg',
        foodPrice: 1500,
        foodDescription:
          'Pollo al horno con hierbas aromáticas y papas al horno',
        foodTime: 45,
        foodPreferences: '',
        foodHealth: '',
        tags: ['carne', 'grill'],
      },
      {
        foodId: 4,
        categoryId: 2,
        foodName: 'Brochette de carne de cerdo',
        foodImg: '../assets/4.jpg',
        foodPrice: 1500,
        foodDescription:
          'Pollo al horno con hierbas aromáticas y papas al horno',
        foodTime: 45,
        foodPreferences: '',
        foodHealth: '',
        tags: ['carne', 'grill'],
      },
      {
        foodId: 5,
        categoryId: 3,
        foodName: 'Ravioles con salsa de tomate',
        foodImg: '../assets/5.jpg',
        foodPrice: 1500,
        foodDescription:
          'Pollo al horno con hierbas aromáticas y papas al horno',
        foodTime: 45,
        foodPreferences: '',
        foodHealth: '',
        tags: ['carne', 'grill'],
      },
      {
        foodId: 6,
        categoryId: 4,
        foodName: 'Medallones de salmón',
        foodImg: '../assets/6.jpg',
        foodPrice: 1500,
        foodDescription:
          'Pollo al horno con hierbas aromáticas y papas al horno',
        foodTime: 45,
        foodPreferences: '',
        foodHealth: '',
        tags: ['carne', 'grill'],
      },
    ];
  }
}
