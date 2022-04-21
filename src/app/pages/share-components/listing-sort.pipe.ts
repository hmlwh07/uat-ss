
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'dataSort'
})

export class ListingSortPipe implements PipeTransform {
  transform(items: [],sort : any) {
    if (!items || !sort || sort.direction) {
      return items;
    }else{
      let sortedItems = items;
      sortedItems = sortedItems.sort((n1,n2) => {
        if (n1[sort.col] > n2[sort.col]) {
            return 1;
        }
    
        if (n1[sort.col] < n2[sort.col]) {
            return -1;
        }
    
        return 0;
    });
    return sortedItems;
    }
  }
}
