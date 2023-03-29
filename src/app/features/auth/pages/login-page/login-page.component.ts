import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { LoginData } from 'src/app/core/interfaces/login.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  login(loginData: LoginData) {
    from(this.authService.login(loginData)).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/dashboard']);
    });
    // .then(() => this.router.navigate(['/dashboard']))
    // .catch((e) => console.log(e.message));
  }
}
