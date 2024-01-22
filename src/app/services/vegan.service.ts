import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeganService {

  constructor() { }

  getAll(): string[] {
    return [];
  }
}
