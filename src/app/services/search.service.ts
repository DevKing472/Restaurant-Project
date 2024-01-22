import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { take, tap, pluck } from 'rxjs/operators';
import { Foods } from '../model/food';
import { FoodService } from './food.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public foods: Foods[] = [];

  constructor(private apollo: Apollo, private food: FoodService) {}

  filterData(valueToSearch: string): void {
    const QUERY_BY_NAME = gql`
      query ($foodName: String) {
        food(filter: { foodName: $foodName }) {
          info {
            count
          }
          results {
            foodId: number;
            foodName: string;
            foodImg: string;
            foodPrice: number;
            foodDescription: string;
            foodTime: number;
            foodPreferences: string;
            foodHealth: string;
            tags: string[];
      }
        }
      }`;

    this.apollo
      .watchQuery<any>({
        query: QUERY_BY_NAME,
        variables: {
          foodName: valueToSearch,
        },
      })
      .valueChanges.pipe(
        take(1),
        pluck('data', 'food'),
        tap((apiResponse) => this.parseFoodData([...apiResponse.results]))
      )
      .subscribe();
  }

  private parseFoodData(food: Foods[]): void {
    (food: string) => {
      return { food };
    };
  }
}
