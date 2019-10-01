import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { I_TICKETS_REPOSITORY } from '../../../repositories/tickets/tickets.repository.interface';
import { TicketsRepositoryMock } from '../../../repositories/tickets/tickets.repository.mock';
import { I_USERS_REPOSITORY } from '../../../repositories/users/users.repository.interface';
import { UsersRepositoryMock } from '../../../repositories/users/users.repository.mock';
import { NrwlStoreModule } from '../../../state/nrwl-store.module';
import { TicketsFacade } from '../../../state/tickets/facades/tickets.facade';
import { UsersFacade } from '../../../state/users/facades/users.facade';
import { TicketComponent } from '../../shared/ticket/ticket.component';
import { TicketFilterComponent } from './components/ticket-filter/ticket-filter.component';

import { TicketsListPageComponent } from './tickets-list-page.component';

describe('TicketsListPageComponent', () => {
    let component: TicketsListPageComponent;
    let fixture: ComponentFixture<TicketsListPageComponent>;
    let usersFacade: UsersFacade;
    let ticketsFacade: TicketsFacade;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TicketsListPageComponent, TicketComponent, TicketFilterComponent],
            imports: [FormsModule, NrwlStoreModule, RouterTestingModule],
            providers: [
                {
                    provide: I_TICKETS_REPOSITORY,
                    useClass: TicketsRepositoryMock
                },
                {
                    provide: I_USERS_REPOSITORY,
                    useClass: UsersRepositoryMock
                }
            ]
        });

        usersFacade = TestBed.get(UsersFacade);
        ticketsFacade = TestBed.get(TicketsFacade);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TicketsListPageComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('On init', () => {
        it('should fetch users on init', () => {
            spyOn(usersFacade, 'fetchUsers');

            fixture.detectChanges();

            expect(usersFacade.fetchUsers).toHaveBeenCalled();
        });

        it('should fetch tickets on init', () => {
            spyOn(ticketsFacade, 'fetchTickets');

            fixture.detectChanges();

            expect(ticketsFacade.fetchTickets).toHaveBeenCalled();
        });
    });

    describe('When filter changes', () => {
        [null, undefined, ''].forEach(value => {
            it(`should select all tickets if it is ${value}`, () => {
                spyOn(ticketsFacade, 'selectAllTickets');

                component.onFilterChange(value);

                expect(ticketsFacade.selectAllTickets).toHaveBeenCalled();
            });
        });

        it('should filter tickets', () => {
            spyOn(ticketsFacade, 'filterTickets');

            component.onFilterChange('value');

            expect(ticketsFacade.filterTickets).toHaveBeenCalled();
        });
    });
});
