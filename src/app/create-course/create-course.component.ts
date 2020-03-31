import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  course: Course = new Course();
  submitted = false;

  constructor(
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  newCourse(): void {
    this.submitted = false;
    this.course = new Course();
  }

  save() {
    console.log(this.course)
    this.courseService.createCourse(this.course)
      .subscribe(data => console.log(data), error => console.log(error));
    this.course = new Course();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/courses']);
  }
}
