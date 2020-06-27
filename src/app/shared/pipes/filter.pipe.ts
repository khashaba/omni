import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(rows, column, filters) {
    if (!column?.columnName && Object.keys(filters).length < 1) {
      return rows;
    }
    const columnName = column.columnName;
    // tslint:disable-next-line: forin
    for (const filterName in filters) {
      // range case - making sure that at least one applied
      if (filterName === 'range') {
        // apply 'from' filter
        if (filters[filterName].from) {
          rows = rows.filter(
            (row) => row[columnName] >= filters[filterName].from
          );
        }
        // apply 'to' filter
        if (filters[filterName].to) {
          rows = rows.filter(
            (row) => row[columnName] <= filters[filterName].to
          );
        }
      } else {
        // other cases
        rows = rows.filter((row) => row[columnName] == filters[filterName]);
      }
    }
    return rows;
  }
}
