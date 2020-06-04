import { Component, OnInit } from '@angular/core';
import { Course, Group } from '../_models';
import { GroupService, TokenStorageService } from '../_service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  groups: Observable<Group[]>;

  constructor(
    private groupService: GroupService,
    private token: TokenStorageService,) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    console.log(this.token.getUser().id);
    this.groups = this.groupService.getGroupsByTeacher(this.token.getUser().id);
    console.log(this.groups);
  }

  deleteGroup(id: number) {
    this.groupService.deleteGroup(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

}
