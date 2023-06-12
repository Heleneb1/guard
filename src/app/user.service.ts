import { Injectable } from '@angular/core';
import { User } from './models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private role: 'ANONYMOUS' | 'USER' | 'ADMIN' = 'ANONYMOUS';
  public username: string = '';
  public users = [
    { username: 'user1', password: 'password1', role: 'USER' },
    { username: 'user2', password: 'password2', role: 'USER' },
    { username: 'admin', password: 'admin123', role: 'ADMIN' },
  ];

  login(username: string, password: string): void {
    const foundUser = this.users.find(
      (user) => user.username === username && user.password === password
    );
    console.log('User', foundUser);
    if (foundUser) {
      this.role = foundUser.role as 'ANONYMOUS' | 'USER' | 'ADMIN';
      this.username = foundUser.username;
    }
  }

  getRole(): string {
    console.log('Role', this.role);
    return this.role;
  }
  getName(): any {
    console.log('Name', this.username);
    return this.username;
  }
}
