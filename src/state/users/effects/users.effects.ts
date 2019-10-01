import { HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { User } from '../../../domain/user.interface';
import { I_USERS_REPOSITORY, IUsersRepository } from '../../../repositories/users/users.repository.interface';
import { fetchUsers, fetchUsersFailure, fetchUsersSuccess } from '../actions/users.actions';

@Injectable()
export class UsersEffects {
    public readonly getUsers$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchUsers),
            switchMap(() => {
                return this.usersRepository.getUsers().pipe(
                    map((users: Array<User>) => fetchUsersSuccess({ users })),
                    catchError(({ message }: HttpErrorResponse) => of(fetchUsersFailure({ error: message })))
                );
            })
        )
    );

    constructor(
        private readonly actions$: Actions,
        @Inject(I_USERS_REPOSITORY) private readonly usersRepository: IUsersRepository
    ) {
    }
}
