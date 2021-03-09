import { Component, OnInit } from '@angular/core';
import { User } from '@fem/api-interfaces';
import { UsersService } from '@fem/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'fem-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  links = [
    { path: '/', icon: 'home', title: 'home' },
    { path: '/users', icon: 'view_list', title: 'users' },
  ];

  users$: Observable<User[]>;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.users$ = this.usersService.all();
  }

  logout() { }

  toggleSidenav() { }
}
