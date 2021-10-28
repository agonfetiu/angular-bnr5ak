import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cellFormatter',
})
export class CellFormatterPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (!value) {
      return;
    }

    let result = null;
    const pipe = args[0];

    switch (pipe) {
      default:
        result = value;
        break;
    }

    return result;
  }
}
