import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { Observable, Subject } from 'rxjs';
// import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
// import { Country } from '../country';
// import { CountryService } from '../country.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // searchTerms: string;

  @Output() inputEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  handleInput(searchTerms) {
    console.log(searchTerms);
    this.inputEvent.emit(searchTerms);
  }

}
