import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchObj): any[] {
    const columnName = searchObj.searchColumn;
    const searchText = searchObj.searchText?.toLowerCase();
    if (!items) return [];
    if (!searchText) return items;
    return items.filter((item) => {
      console.log(searchText)
      console.log(item[columnName])
      return item[columnName]?.toLowerCase().includes(searchText);
    });
  }
}
