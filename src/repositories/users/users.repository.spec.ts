import { TestBed } from '@angular/core/testing';
import { UsersRepository } from './users.repository';

describe('UsersRepository', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [UsersRepository]
    }));

    it('should be created', () => {
        const service: UsersRepository = TestBed.get(UsersRepository);
        expect(service).toBeTruthy();
    });
});
