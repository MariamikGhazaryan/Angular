import {Pipe, PipeTransform} from '@angular/core';
import {UserModel} from "../models/user.model";

@Pipe({
    name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

    transform(value: UserModel[], str: string): UserModel[] {
        return value.filter(item => item.firstName.toLowerCase().includes(str.toLowerCase()));
    }
}
