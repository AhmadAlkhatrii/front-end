import { SignupComponent } from './signup/signup.component';
import { FilmsRowComponent } from './films-row/films-row.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
// config routes
  {path:'test',component: TestCompComponent},
  {path:'home',component: FilmsRowComponent},
  {path:'aboutUs',component: CoursesComponent},
  {path:'login',component: LoginComponent},
  {path:'signup',component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TestCompComponent,FilmsRowComponent,CoursesComponent,
                                  LoginComponent,SignupComponent]