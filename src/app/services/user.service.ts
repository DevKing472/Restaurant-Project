import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  public getAll(): User[] {
    return [
      {
        userId: 1,
        userName: 'Alkemy',
      },
    ];
  }
}
