import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {
  content: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getSecretContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
