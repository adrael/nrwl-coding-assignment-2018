import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../../../domain/ticket.interface';
import { User } from '../../../domain/user.interface';
import { TicketsFacade } from '../../../state/tickets/facades/tickets.facade';
import { UsersFacade } from '../../../state/users/facades/users.facade';

@Component({
    selector: 'app-ticket-creation-page',
    templateUrl: './ticket-creation-page.component.html',
    styleUrls: ['./ticket-creation-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketCreationPageComponent implements OnInit {
    public users$: Observable<ReadonlyArray<User>> = this.usersFacade.selectAllUsers();
    public hasUsers$: Observable<boolean> = this.usersFacade.hasUsers();

    public ticket: Ticket = {
        assigneeId: null,
        description: ''
    };

    constructor(private readonly usersFacade: UsersFacade, private readonly ticketsFacade: TicketsFacade) {
    }

    public ngOnInit(): void {
        this.usersFacade.fetchUsers();
    }

    public createTicket(): void {
        this.ticketsFacade.createTicket({ ...this.ticket });
    }

    public isSelectedUser(userId: number): boolean {
        return this.ticket.assigneeId === userId;
    }

    public selectUser(userId: number): void {
        this.ticket.assigneeId = userId;
    }
}
