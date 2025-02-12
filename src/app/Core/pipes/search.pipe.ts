import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], searchValue: string): any[] {
    if (!value || !Array.isArray(value)) {
      return [];
    }

    if (!searchValue) {
      return value;
    } 

    const lowerCaseSearchValue = searchValue.toLowerCase();    
    return value.filter((v: any) => {
      const couponTitle = v.title?.toLowerCase() || '';

      return (
        couponTitle.indexOf(lowerCaseSearchValue) > -1
      );
    });
  }
}