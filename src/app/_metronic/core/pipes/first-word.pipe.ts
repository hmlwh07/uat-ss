import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstWord'
})
export class GetFirstWord implements PipeTransform
{
    transform(value: string): string | boolean
    {
        if (value === null) {return "";}
        const firstWords = value.split(" ")
        return firstWords[0];
    }
}