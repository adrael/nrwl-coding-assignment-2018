import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../../../domain/user.interface';
import { RootUsersState } from '../reducers';
import { usersAdapter, UsersState } from '../reducers/users.reducer';

export const getUsersState = createFeatureSelector<RootUsersState, UsersState>('users');

export const {
    selectIds: getUsersIds,
    selectTotal: getUsersTotal,
    selectAll: getUsersAll,
    selectEntities: getUsersEntities
} = usersAdapter.getSelectors<RootUsersState>(getUsersState);

export const hasUsers = createSelector(
    getUsersTotal,
    (count: number) => count > 0
);

export const getUserById = createSelector(
    getUsersAll,
    (users: ReadonlyArray<User>, { id }: { id: number }) => {
        return users.find((user: User) => user.id === id);
    }
);
