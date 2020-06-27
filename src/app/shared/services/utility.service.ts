import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor() {}
  // this should be a pipe
  // this is not best practice
  // but i did it like that to try another way
  // i already did the sorting and searching using the pips
  filter(rows, column, filters) {
    const columnName = column.columnName;
    let filteredRows = rows.slice(0);
    // tslint:disable-next-line: forin
    for (const filter in filters) {
      // range case - making sure that at least one applied
      if (
        filter === 'range' &&
        (filters[filter]['to'] || filters[filter]['from'])
      ) {
        // apply 'from' filter
        if (filters[filter]['from']) {
          filteredRows = rows.filter(
            (row) => row[columnName] >= filters[filter]['from']
          );
        }
        // apply 'to' filter
        if (filters[filter]['to']) {
          filteredRows = rows.filter(
            (row) => row[columnName] <= filters[filter]['to']
          );
        }
      }
      // other cases
      filteredRows = rows.filter((row) => row[columnName] == filters[filter]);
    }
    return filteredRows;
  }
}
