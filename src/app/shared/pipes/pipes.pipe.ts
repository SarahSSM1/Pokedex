import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(value: unknown[], args?: any): unknown[] {
    if (!value) return value;
    if (!args) return value;

    args = args.toLocaleLowerCase();
    return value.filter((item: any) =>
    JSON.stringify(item)
    .toLocaleLowerCase()
    .includes(args))
  }

}
