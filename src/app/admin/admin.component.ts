import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service';
import { User } from '../_models';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this.userService.getUsersList();
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
}