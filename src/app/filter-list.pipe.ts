import { Pipe, PipeTransform } from '@angular/core';
import { Country } from './country';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(value: Country[], term: string): Country[] {
    console.log('PIPE TERM: ', term);
    if (term) {
      const filteredList = value.filter(country => {
        return country.name.toLowerCase().includes(term.toLowerCase());
      });
      return filteredList;
    }
    return value;
  }

}
