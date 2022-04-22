
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'dataSort'
})

export class ListingSortPipe implements PipeTransform {
  transform(items: [], direction: any, field: any) {
    if (!items || !direction || field) {
      return items;
    } else {
      let sortedItems = items;
      sortedItems = sortedItems.sort((n1, n2) => {
        if (n1[field] > n2[field]) {
          return 1;
        }

        if (n1[field] < n2[field]) {
          return -1;
        }

        return 0;
      });
      return sortedItems;
    }
  }
}
