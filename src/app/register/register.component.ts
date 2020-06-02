import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  passwordRepeat: string;
  invalidRegister = false;
  registerSuccess = false;
  errorMessage: string;
  successMessage: 'Аккаунт создан';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  handleRegister() {
    if (this.password != this.passwordRepeat) {
      this.invalidRegister = true;
      this.registerSuccess = false;
      this.errorMessage = 'Пароли не совпадают';
      return;
    }
    /*this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
      this.invalidRegister = false;
      this.registerSuccess = true;
      this.router.navigate(['/courses']);
    }, () => {
      this.errorMessage = 'Неправильные данные';
      this.invalidRegister = true;
      this.registerSuccess = false;
    });*/
  }

}
