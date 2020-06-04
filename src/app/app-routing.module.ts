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
import { TeacherComponent } from './teacher/teacher.component';
import { ProfileComponent } from './profile/profile.component';
import { SecretComponent } from './secret/secret.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'courses', component: CoursesListComponent },
  { path: 'add', component: CreateCourseComponent },
  { path: 'update/:id', component: UpdateCourseComponent },
  { path: 'details/:id', component: CourseDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'secret', component: SecretComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
