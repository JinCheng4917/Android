import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 0:
        return `货主`;
        break;
      case 1:
        return `司机`;
        break;
    }
  }
}
