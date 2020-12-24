import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmService } from './film.service';
import {HttpClientModule} from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button'; 

import {MatDialogModule} from '@angular/material/dialog';
import { ViewDetailComponent } from './view-detail/view-detail.component';
// in order to be able to show the input box

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    routingComponents,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    ViewDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent,
 ]
})
export class AppModule { }
