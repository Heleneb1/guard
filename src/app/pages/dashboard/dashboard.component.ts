import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  @Input() username: string = '';
  user: User[] = [];
  role: any;

  constructor(private userService: UserService) {
    this.role = this.userService.getRole();
    this.user = this.userService.getName();
  }
}
