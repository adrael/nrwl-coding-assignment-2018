import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../domain/user.interface';
import { IUsersRepository } from './users.repository.interface';

@Injectable()
export class UsersRepositoryMock implements IUsersRepository {

    public getUsers(): Observable<ReadonlyArray<User>> {
        return of([{
            id: 3,
            name: 'Test'
        }]);
    }

    public getUserById(userId: number): Observable<User> {
        return of({
            id: 3,
            name: 'Test'
        });
    }
}
