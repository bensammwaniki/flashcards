import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaincomponetsComponent } from './maincomponets/maincomponets.component';
import { HomecomponetsComponent } from './homecomponets/homecomponets.component';
import { SubjectComponent } from './subject/subject.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './servicies/user.service'; 
import { DataService } from './servicies/data.service';


const appRoutes: Routes = [
  { path: '', component: HomecomponetsComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MaincomponetsComponent,
    HomecomponetsComponent,
    SubjectComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [UserService, DataService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
