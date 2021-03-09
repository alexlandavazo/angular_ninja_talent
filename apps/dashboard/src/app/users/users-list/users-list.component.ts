import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@fem/api-interfaces';

@Component({
  selector: 'fem-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input() users: User[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
