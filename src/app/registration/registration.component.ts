import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../services/users.service";
import {UserModel} from "../models/user.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    registerFormGroup = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    isLoading: boolean = false;

    constructor(private usersService: UsersService,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    isInvalid(controlName: string): boolean {
        return this.registerFormGroup.controls[controlName].invalid &&
            (this.registerFormGroup.controls[controlName].touched || this.registerFormGroup.controls[controlName].dirty);
    }

    onSubmit() {
        Object.values(this.registerFormGroup.controls).forEach(control => control.disable());
        this.isLoading = true;
        setTimeout(() => {
            const formGroupValue = this.registerFormGroup.value;
            const user: UserModel = {
                id: this.usersService.getUsers().length + 1,
                firstName: formGroupValue.firstName,
                lastName: formGroupValue.lastName,
                email: formGroupValue.email,
                password: formGroupValue.password,
                todoList: []
            };
            this.usersService.addUser(user);
            this.isLoading = false;
            this.usersService.logIn();
            this.router.navigateByUrl('/home');
        }, 4000);
    }
}
