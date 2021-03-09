import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreDataModule } from '@fem/core-data';
import { CoreStateModule, UsersFacade } from '@fem/core-state';
import { MaterialModule } from '@fem/material';
import { of } from 'rxjs';

import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersComponent } from './users.component';

export const mockUsersFacade = {
  loadUsers: () => { },
  selectUser: () => { },
  deleteUser: () => { },
  updateUser: () => { },
  createUser: () => { },
  mutations$: of(true),
};

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UsersComponent,
        UserDetailsComponent,
        UsersListComponent,
      ],
      imports: [
        CoreDataModule,
        CoreStateModule,
        FormsModule,
        MaterialModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: UsersFacade, useValue: mockUsersFacade },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
