import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, targetUnits: string): any {
    if (!value) {
      return '';
    }

    switch (targetUnits) {
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1.60934 * 1201;
      default:
        return value;
    }
  }
}
