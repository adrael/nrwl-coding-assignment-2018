import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { ReplaySubject, Subject, throwError } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { I_USERS_REPOSITORY } from '../../../repositories/users/users.repository.interface';
import { UsersRepositoryMock } from '../../../repositories/users/users.repository.mock';
import { fetchUsers, fetchUsersFailure, fetchUsersSuccess } from '../actions/users.actions';
import { usersInitialState } from '../reducers/users.reducer';
import { UsersEffects } from './users.effects';

describe('Users: Effect', () => {
    const unsubscribe$ = new Subject();

    let effects: UsersEffects;
    let actions: ReplaySubject<Action>;
    let usersRepository: UsersRepositoryMock;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: I_USERS_REPOSITORY,
                    useClass: UsersRepositoryMock
                },
                UsersEffects,
                provideMockActions(() => actions),
                provideMockStore({ initialState: usersInitialState })
            ]
        });

        usersRepository = TestBed.get(I_USERS_REPOSITORY);
        effects = TestBed.get(UsersEffects);
    });

    afterEach(() => {
        unsubscribe$.next();
    });

    it('should get users and dispatch a success action', () => {
        actions = new ReplaySubject(1);
        actions.next(fetchUsers);

        effects.getUsers$.pipe(takeUntil(unsubscribe$)).subscribe((result: Action) => {
            expect(result).toBeTruthy();
            expect(result.type).toContain(fetchUsersSuccess.type);
        });
    });

    it('should get users and dispatch an error action on failure', () => {
        actions = new ReplaySubject(1);
        actions.next(fetchUsers);

        spyOn(usersRepository, 'getUsers').and.returnValue(throwError('Failure'));

        effects.getUsers$.pipe(takeUntil(unsubscribe$)).subscribe((result: Action) => {
            expect(result).toBeTruthy();
            expect(result.type).toContain(fetchUsersFailure.type);
        });
    });
});
