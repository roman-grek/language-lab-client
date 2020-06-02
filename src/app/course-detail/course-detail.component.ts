import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Course } from '../_models/course';
import { CourseService } from '../_service/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  id: number;
  course: Course;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.course = new Course();

    this.id = this.route.snapshot.params['id'];
    
    this.courseService.getCourse(this.id)
      .subscribe(data => {
        console.log(data)
        this.course = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['courses']);
  }

}
