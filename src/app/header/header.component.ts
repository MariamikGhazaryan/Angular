import {Component, OnInit} from '@angular/core';
import {UsersService} from "../services/users.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    loggedIn: boolean = false;

    constructor(private usersService: UsersService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.usersService.isLoggedIn().subscribe(result => {
            this.loggedIn = result;
        });
    }

    ngOnDestroy() {
        this.usersService.isLoggedIn().unsubscribe();
    }

    logOut(): void {
        this.usersService.logOut();
        this.router.navigateByUrl('/login');
    }
}
