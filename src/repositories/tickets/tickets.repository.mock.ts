import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ticket } from '../../domain/ticket.interface';
import { ITicketsRepository } from './tickets.repository.interface';

@Injectable()
export class TicketsRepositoryMock implements ITicketsRepository {
    public getTickets(): Observable<ReadonlyArray<Ticket>> {
        return of([]);
    }

    public getTicketById(ticketId: number): Observable<Ticket> {
        return of({
            assigneeId: 0,
            description: 'Test'
        });
    }

    public toggleTicketCompleteness(ticketId: number, completeness: boolean): Observable<Ticket> {
        return of({
            assigneeId: 0,
            description: 'Test'
        });
    }

    public createTicket(ticket: Ticket): Observable<Ticket> {
        return of({
            assigneeId: 0,
            description: 'Test'
        });
    }

    public assignUser(ticketId: number, userId: number): Observable<Ticket> {
        return of({
            assigneeId: 0,
            description: 'Test'
        });
    }
}
