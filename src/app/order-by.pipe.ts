import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], field: string, reverse: boolean = false): any[] {
    if (!Array.isArray(array)) {
      return array;
    }

    const order = reverse ? -1 : 1;

    return array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1 * order;
      } else if (a[field] > b[field]) {
        return 1 * order;
      } else {
        return 0;
      }
    });
  }
}
