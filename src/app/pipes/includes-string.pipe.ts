import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'includesString'
})
export class IncludesStringPipe implements PipeTransform {

    transform(value: string, str: string): string | null {
        return value.toLowerCase().includes(str.toLowerCase()) ? value : null;
    }
}
