import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../../domain/user.interface';
import { fetchUsers } from '../actions/users.actions';
import { RootUsersState } from '../reducers';
import { getUserById, getUsersAll, hasUsers } from '../selectors/users.selectors';

@Injectable({
    providedIn: 'root'
})
export class UsersFacade {
    constructor(private readonly store: Store<RootUsersState>) {
    }

    public fetchUsers(): void {
        this.store.dispatch(fetchUsers());
    }

    public selectAllUsers(): Observable<ReadonlyArray<User>> {
        return this.store.pipe(select(getUsersAll));
    }

    public selectUserById(id: number): Observable<User> {
        return this.store.pipe(select(getUserById, { id }));
    }

    public hasUsers(): Observable<boolean> {
        return this.store.pipe(select(hasUsers));
    }
}
