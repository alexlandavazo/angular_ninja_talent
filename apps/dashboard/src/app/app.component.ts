import { Component } from '@angular/core';

@Component({
  selector: 'fem-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links = [
    { path: '/', icon: 'home', title: 'home' },
    { path: '/users', icon: 'view_list', title: 'users' },
  ];

  logout() { }

  toggleSidenav() { }
}
