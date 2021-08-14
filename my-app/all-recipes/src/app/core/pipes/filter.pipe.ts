import { Pipe, PipeTransform } from '@angular/core';
import { iPosts } from 'src/app/share/interface';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items : iPosts[] | undefined, searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.title.toLocaleLowerCase().includes(searchText);
    });
  }

}
