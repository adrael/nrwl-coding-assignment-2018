import { TestBed } from '@angular/core/testing';
import { TicketsRepository } from './tickets.repository';

describe('TicketsRepository', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [TicketsRepository]
    }));

    it('should be created', () => {
        const service: TicketsRepository = TestBed.get(TicketsRepository);
        expect(service).toBeTruthy();
    });
});
