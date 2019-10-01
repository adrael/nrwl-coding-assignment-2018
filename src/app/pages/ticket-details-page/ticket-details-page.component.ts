import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Ticket } from '../../../domain/ticket.interface';
import { User } from '../../../domain/user.interface';
import { TicketsFacade } from '../../../state/tickets/facades/tickets.facade';
import { UsersFacade } from '../../../state/users/facades/users.facade';

@Component({
    selector: 'app-ticket-details-page',
    templateUrl: './ticket-details-page.component.html',
    styleUrls: ['./ticket-details-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketDetailsPageComponent implements OnInit {
    public users$: Observable<ReadonlyArray<User>> = this.usersFacade.selectAllUsers();
    public ticket$: Observable<Ticket>;
    public hasUsers$: Observable<boolean> = this.usersFacade.hasUsers();

    constructor(private readonly route: ActivatedRoute,
                private readonly usersFacade: UsersFacade,
                private readonly ticketsFacade: TicketsFacade) {
    }

    public ngOnInit(): void {
        this.usersFacade.fetchUsers();
        this.ticketsFacade.fetchTickets();

        this.route.params.pipe(first()).subscribe((params: ParamMap) => {
            this.ticket$ = this.ticketsFacade.selectTicketById(+params[ 'id' ]);
        });
    }

    public isSelectedUser(ticket: Ticket, userId: number): boolean {
        return ticket.assigneeId === userId;
    }

    public assignUser(ticketId: number, userId: number): void {
        this.ticketsFacade.assignUser(ticketId, userId);
    }
}
