import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() username!: string;
  password!: string;
  user: any;
  users: any;

  constructor(private userService: UserService, private router: Router) {
    this.users = userService.users;
  }

  onLogin() {
    const foundUser = this.users.find(
      (user: User) =>
        user.username === this.username && user.password === this.password
    );
    console.log(foundUser);

    if (foundUser) {
      this.userService.login(this.username, this.password);
      this.user = foundUser;
    }
    alert(`Hello, ${this.username}`);
  }
}
