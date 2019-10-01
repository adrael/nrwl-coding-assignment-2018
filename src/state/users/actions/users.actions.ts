import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { User } from '../../../domain/user.interface';

export interface UsersSuccessPayload {
    users: Array<User>;
}

export const fetchUsers = createAction('[Users API] Fetch users');
export const fetchUsersSuccess = createAction(
    '[Users API] Fetch users success',
    props<UsersSuccessPayload>()
);
export const fetchUsersFailure = createAction(
    '[Users API] Fetch users failure',
    props<{ error: HttpErrorResponse }>()
);
