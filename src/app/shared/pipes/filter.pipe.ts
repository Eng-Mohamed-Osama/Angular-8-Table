import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {
  transform(r,value): any {
    return r.filter(s => s.name.startsWith(value));
  }

}
