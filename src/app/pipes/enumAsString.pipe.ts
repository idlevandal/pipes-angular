import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumAsString'
})
export class EnumPipe implements PipeTransform {

  transform(category: Category): unknown {
    console.log('cat', category);
    
    if (!category && category !== 0) {
      return 'All'
    }
    return Category[category];
  }

}

export enum Category {
  All = 0,
  Fitness,
  Music,
  Entertainment
}
