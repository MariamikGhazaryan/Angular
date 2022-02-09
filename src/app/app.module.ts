import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {UsersService} from './services/users.service';
import {UserComponent} from './users/user/user.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ErrorMessageComponent} from './error-message/error-message.component';
import {FilterUsersPipe} from './pipes/filter-users.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        UsersComponent,
        TodoListComponent,
        UserComponent,
        NotFoundComponent,
        LoginComponent,
        RegistrationComponent,
        ErrorMessageComponent,
        FilterUsersPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
    ],
    providers: [UsersService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
