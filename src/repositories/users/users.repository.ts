import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../domain/user.interface';
import { BackendService } from '../../services/backend.service';
import { IUsersRepository } from './users.repository.interface';

@Injectable()
export class UsersRepository implements IUsersRepository {
    constructor(private readonly backendService: BackendService) {
    }

    public getUsers(): Observable<ReadonlyArray<User>> {
        return this.backendService.users();
    }

    public getUserById(userId: number): Observable<User> {
        return this.backendService.user(userId);
    }
}
