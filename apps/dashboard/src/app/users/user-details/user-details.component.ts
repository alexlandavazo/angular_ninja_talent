import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@fem/api-interfaces';

@Component({
  selector: 'fem-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  currentUser: User;
  originalFirstName = '';
  @Input() set user(value: User) {
    if (value) this.originalFirstName = value.firstname;
    this.currentUser = { ...value };
  };
  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
}
