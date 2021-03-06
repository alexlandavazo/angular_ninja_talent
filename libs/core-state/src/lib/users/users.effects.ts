import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import * as fromUsers from './users.reducer';
import * as UsersActions from './users.actions';
import { User } from '@fem/api-interfaces';
import { UsersService } from '@fem/core-data';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.loadUsers),
    fetch({
      run: (action) =>
        this.usersService
          .all()
          .pipe(
            map((users: User[]) =>
              UsersActions.loadUsersSuccess({ users })
            )
          ),
      onError: (action, error) => UsersActions.loadUsersFailure({ error }),
    })
  ));

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.loadUser),
    fetch({
      run: (action) =>
        this.usersService
          .find(action.userId)
          .pipe(
            map((user: User) =>
              UsersActions.loadUserSuccess({ user })
            )
          ),
      onError: (action, error) => UsersActions.loadUserFailure({ error }),
    })
  ));

  createUser$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.createUser),
    pessimisticUpdate({
      run: (action) =>
        this.usersService
          .create(action.user)
          .pipe(
            map((user: User) =>
              UsersActions.createUserSuccess({ user })
            )
          ),
      onError: (action, error) => UsersActions.createUserFailure({ error }),
    })
  ));

  updateUser$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.updateUser),
    pessimisticUpdate({
      run: (action) =>
        this.usersService
          .update(action.user)
          .pipe(
            map((user: User) =>
              UsersActions.updateUserSuccess({ user })
            )
          ),
      onError: (action, error) => UsersActions.updateUserFailure({ error }),
    })
  ));

  deleteUser$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.deleteUser),
    pessimisticUpdate({
      run: (action) =>
        this.usersService
          .delete(action.user)
          .pipe(
            map((user: User) =>
              UsersActions.deleteUserSuccess({ user })
            )
          ),
      onError: (action, error) => UsersActions.deleteUserFailure({ error }),
    })
  ));

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) { }
}
