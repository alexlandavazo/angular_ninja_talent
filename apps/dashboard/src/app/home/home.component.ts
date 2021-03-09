import { Component, OnInit } from '@angular/core';
import { User } from '@fem/api-interfaces';
import { UsersFacade } from '@fem/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allUsers$: Observable<User[]> = this.usersFacade.allUsers$;

  constructor(private usersFacade: UsersFacade) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.usersFacade.loadUsers();
  }
}
