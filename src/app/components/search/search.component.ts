import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import {
  tap,
  map,
  distinctUntilChanged,
  filter,
  debounceTime,
} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  search = new FormControl('');

  constructor(private searchSvc: SearchService) {
    this.search.valueChanges
      .pipe(
        map((search) => search?.toLowerCase().trim()),
        debounceTime(300),
        distinctUntilChanged(),
        filter((search) => search != '' && search?.length > 2),
        tap((search) => this.searchSvc.filterData(search))
      )
      .subscribe();
  }

  ngOnInit(): void {}
}
