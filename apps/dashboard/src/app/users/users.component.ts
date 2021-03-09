import { Component, OnInit } from '@angular/core';
import { User } from '@fem/api-interfaces';
import { UsersFacade } from '@fem/core-state';
import { Observable } from 'rxjs';

const emptyUser: User = {
  id: null,
  firstname: '',
  lastname: '',
  birthDate: '',
  email: '',
  address: {
    id: null,
    street: '',
    country: '',
    city: '',
    postalcode: ''
  }
}

@Component({
  selector: 'fem-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  allUsers$: Observable<User[]> = this.usersFacade.allUsers$;
  selectedUser$: Observable<User> = this.usersFacade.selectedUser$;

  constructor(private usersFacade: UsersFacade) { }

  ngOnInit(): void {
    this.reset();
    this.usersFacade.mutations$.subscribe((_) => this.reset())
  }

  reset() {
    this.loadUsers();
    this.selectUser(emptyUser);
  }

  resetForm() {
    this.selectUser(emptyUser);
  }

  selectUser(user: User) {
    this.usersFacade.selectUser(user?.id);
  }

  loadUsers() {
    this.usersFacade.loadUsers();
  }

  saveUser(user: User) {
    this.usersFacade.saveUser(user);
  }

  deleteUser(user: User) {
    this.usersFacade.deleteUser(user);
  }
}
