import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';

import { Course } from '../_models/course';
import { CourseService } from '../_service/course.service';
import { TokenStorageService } from '../_service/token-storage.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses: Observable<Course[]>;
  isLoggedIn = false;
  showAdminBoard = false;

  constructor(
    private courseService: CourseService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reloadData();

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();

      this.showAdminBoard = user.roles.includes('ROLE_ADMIN');
    }
  }

  reloadData() {
    this.courses = this.courseService.getCoursesList();
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  addCourse() {
    this.router.navigate(['add']);
  }

  courseDetails(id: number) {
    this.router.navigate(['details', id]);
  }

}
