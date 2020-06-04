import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Course } from '../_models';
import { CourseService } from '../_service';
import { UserService } from '../_service';
import { GroupService } from '../_service';
import { TokenStorageService } from '../_service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  id: number;
  course: Course;
  private roles: string[];
  isLoggedIn = false;
  showTeacherBoard = false;
  user: any;

  constructor(
    private courseService: CourseService,
    private groupService: GroupService,
    private userService: UserService,
    private tokenStorageService: TokenStorageService,
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

      this.isLoggedIn = !!this.tokenStorageService.getToken();

      if (this.isLoggedIn) {
        this.user = this.tokenStorageService.getUser();
        this.roles = this.user.roles;
  
        this.showTeacherBoard = this.roles.includes('ROLE_TEACHER');
      }
  }

  list(){
    this.router.navigate(['courses']);
  }

  joinCourse() {
    this.userService.joinCourse(this.course.id)
      .subscribe(data => console.log(data), error => console.log(error));
    this.goToProfile();
  }

  createGroup() {
    console.log(this.course.id, this.user.id);
    this.groupService.createGroup({
      courseName: this.course.name,
      teacherName: this.user.username,
    }).subscribe(data => console.log(data), error => console.log(error));
    this.goToTeacherPage();
  }

  goToTeacherPage() {
    this.router.navigate(['teacher']);
  }

  goToProfile() {
    this.router.navigate(['profile']);
  }

}
