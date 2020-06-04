import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../_service';
import { GroupService } from '../_service';
import { Observable } from 'rxjs';
import { Group } from '../_models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  currentGroup = new Group();
  isSimpleUser = true;
  hasCourse = false;

  constructor(
    private token: TokenStorageService,
    private groupService: GroupService) { }

  ngOnInit() {  
    this.currentUser = this.token.getUser();
    this.isSimpleUser = !(this.currentUser.roles.includes('ROLE_ADMIN') ||
                    this.currentUser.roles.includes('ROLE_TEACHER'));
    this.reloadData();
  }

  reloadData() {
    this.groupService.getGroupByUser(this.currentUser.id)
      .subscribe(data => {
        console.log(data)
        this.currentGroup = data;
        this.hasCourse = true;
      }, error => {
        console.log(error);
        this.hasCourse = false;
      });
    console.log(this.currentGroup);
  }

  leaveGroup() {
    this.groupService.leaveGroup(this.currentUser.id);
    this.reloadData();
  }
}
