import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Ticket } from '../../../domain/ticket.interface';
import { User } from '../../../domain/user.interface';

@Component({
    selector: 'app-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketComponent {
    @Input() public user: User;
    @Input() public ticket: Ticket;

    @Output() public readonly ticketCompletenessToggled: EventEmitter<void> = new EventEmitter<void>();

    public toggleCompleteness(): void {
        this.ticketCompletenessToggled.next();
    }
}
