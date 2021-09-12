import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersListComponent } from './basics/users-list/users-list.component';
import { UsersCardComponent } from './basics/users-card/users-card.component';
import { FormsModule } from '@angular/forms';
import { SimpleFormComponent } from './forms/td-forms/simple-form/simple-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersCardComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
