import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchObj): any[] {
    if (!items) return [];
    if (searchObj === {}) return items;
    const columnName = searchObj.searchColumn;
    const searchText =
      typeof searchObj.searchText === 'string'
        ? searchObj.searchText?.toLowerCase()
        : searchObj.searchText;

    if (searchText === "") return items;
    return items.filter((item) => {
      console.log(searchText);
      console.log(item[columnName]);
      return typeof item[columnName] === 'string'
        ? item[columnName]?.toLowerCase().includes(searchText)
        : item[columnName] == (searchText);
    });
  }
}
