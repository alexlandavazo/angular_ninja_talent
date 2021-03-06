import { User } from '@fem/api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { usersAdapter, UsersState, USERS_FEATURE_KEY } from './users.reducer';

// Lookup the 'Users' feature state managed by NgRx
export const getUsersState = createFeatureSelector<
  UsersState
>(USERS_FEATURE_KEY);

const { selectAll, selectEntities } = usersAdapter.getSelectors();

export const getUsersLoaded = createSelector(
  getUsersState,
  (state: UsersState) => state.loaded
);

export const getUsersError = createSelector(
  getUsersState,
  (state: UsersState) => state.error
);

export const getAllUsers = createSelector(
  getUsersState,
  (state: UsersState) => selectAll(state)
);

export const getUsersEntities = createSelector(
  getUsersState,
  (state: UsersState) => selectEntities(state)
);

export const getSelectedUserId = createSelector(
  getUsersState,
  (state: UsersState) => state.selectedId
);

const emptyUser: User = {
  id: null,
  firstname: '',
  lastname: '',
  birthDate: '',
  email: '',
  street: '',
  country: '',
  city: '',
  postalcode: ''
}

export const getSelectedUser = createSelector(
  getUsersEntities,
  getSelectedUserId,
  (entities, selectedId) => {
    return selectedId ? entities[selectedId] : emptyUser;
  }
);
export function getSelected(state: any) {
  throw new Error('Function not implemented.');
}

