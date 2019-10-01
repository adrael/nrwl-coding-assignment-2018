import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../../../domain/ticket.interface';
import { User } from '../../../domain/user.interface';
import { TicketsFacade } from '../../../state/tickets/facades/tickets.facade';
import { UsersFacade } from '../../../state/users/facades/users.facade';

@Component({
    selector: 'app-tickets-list-page',
    templateUrl: './tickets-list-page.component.html',
    styleUrls: ['./tickets-list-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketsListPageComponent implements OnInit {
    public users$: Observable<ReadonlyArray<User>> = this.usersFacade.selectAllUsers();
    public tickets$: Observable<ReadonlyArray<Ticket>> = this.ticketsFacade.selectAllTickets();
    public hasTickets$: Observable<boolean> = this.ticketsFacade.hasTickets();

    constructor(private readonly usersFacade: UsersFacade, private readonly ticketsFacade: TicketsFacade) {
    }

    public ngOnInit(): void {
        this.usersFacade.fetchUsers();
        this.ticketsFacade.fetchTickets();
    }

    public onFilterChange(filter: string): void {
        if (!filter || !filter.trim().length) {
            this.tickets$ = this.ticketsFacade.selectAllTickets();
            return;
        }

        this.tickets$ = this.ticketsFacade.filterTickets(filter);
    }

    public findTicketAssignee(ticketId: number): Observable<User> {
        return this.usersFacade.selectUserById(ticketId);
    }

    public onTicketCompletenessToggled(ticket: Ticket): void {
        this.ticketsFacade.toggleTicketCompleteness(ticket.id, !ticket.completed);
    }
}
