import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../../domain/ticket.interface';

export const I_TICKETS_REPOSITORY = new InjectionToken<ITicketsRepository>('ITicketsRepository');

export interface ITicketsRepository {
    createTicket(ticket: Ticket): Observable<Ticket>;

    assignUser(ticketId: number, userId: number): Observable<Ticket>;

    getTickets(): Observable<ReadonlyArray<Ticket>>;

    getTicketById(ticketId: number): Observable<Ticket>;

    toggleTicketCompleteness(ticketId: number, completeness: boolean): Observable<Ticket>;
}
