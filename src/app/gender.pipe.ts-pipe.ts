import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderPipeTs',
  standalone: true
})
export class GenderPipeTsPipe implements PipeTransform {

  transform(value: boolean): string {
     return value ? 'Male' : 'Female';
  }
}
