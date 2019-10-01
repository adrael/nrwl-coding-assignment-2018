import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../domain/user.interface';

export const I_USERS_REPOSITORY = new InjectionToken<IUsersRepository>('IUsersRepository');

export interface IUsersRepository {
    getUsers(): Observable<ReadonlyArray<User>>;

    getUserById(userId: number): Observable<User>;
}
