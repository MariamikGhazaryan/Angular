import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../services/users.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginFormGroup = new FormGroup({
        email: new FormControl('', {
            validators: [Validators.required, Validators.email],
            updateOn: 'change'
        }),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
    isLoading: boolean = false;
    wrongCredentials: boolean = false;

    constructor(private usersService: UsersService,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    onSubmit() {
        Object.values(this.loginFormGroup.controls).forEach(control => control.disable());
        this.isLoading = true;

        setTimeout(() => {
            const formGroupValue = this.loginFormGroup.value;
            const user = this.usersService.getUserByEmailAndPassword(formGroupValue.email, formGroupValue.password);
            if (user) {
                this.usersService.logIn();
                this.isLoading = false;
                this.wrongCredentials = false;
                this.router.navigateByUrl('/home');
            } else {
                this.wrongCredentials = true;
                this.isLoading = false;
                Object.values(this.loginFormGroup.controls).forEach(control => control.enable());
            }
        }, 4000);
    }

    isInvalid(controlName: string): boolean {
        return this.loginFormGroup.controls[controlName].invalid &&
            (this.loginFormGroup.controls[controlName].touched || this.loginFormGroup.controls[controlName].dirty);
    }
}
