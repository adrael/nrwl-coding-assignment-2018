import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../../domain/user.interface';
import { fetchUsersSuccess, UsersSuccessPayload } from '../actions/users.actions';

export interface UsersState extends EntityState<User> {
}

export const usersAdapter = createEntityAdapter<User>({
    selectId: (user: User) => user.id
});

export const usersInitialState: UsersState = usersAdapter.getInitialState();

const reducer = createReducer(
    usersInitialState,
    on(fetchUsersSuccess, (state: UsersState, { users }: UsersSuccessPayload) =>
        usersAdapter.addAll(users, state)
    )
);

export function usersReducer(state: UsersState, action: Action): UsersState {
    return reducer(state, action);
}
