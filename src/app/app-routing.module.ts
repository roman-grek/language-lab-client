import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './_helpers';
import { Role } from './_models';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
    data: { roles: [Role.Admin]}},
  { path: 'courses', component: CoursesListComponent },
  { path: 'add', component: CreateCourseComponent, canActivate: [AuthGuard],
    data: { roles: [Role.Admin]}},
  { path: 'update/:id', component: UpdateCourseComponent, canActivate: [AuthGuard],
    data: { roles: [Role.Admin]}},
  { path: 'details/:id', component: CourseDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
