import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-error-message',
    templateUrl: './error-message.component.html',
    styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

    @Input()
    control: FormControl;

    @Input()
    validationType: string;

    @Input()
    validationMessage: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}
