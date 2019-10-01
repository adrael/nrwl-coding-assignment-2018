import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Ticket } from '../../../domain/ticket.interface';
import { createTicket, fetchTickets, toggleTicketCompleteness, assignUser } from '../actions/tickets.actions';
import { RootTicketsState } from '../reducers';
import { filterTickets, getTicketById, getTicketsAll, hasTickets } from '../selectors/tickets.selectors';

@Injectable({
    providedIn: 'root'
})
export class TicketsFacade {
    constructor(private readonly store: Store<RootTicketsState>) {
    }

    public fetchTickets(): void {
        this.store.dispatch(fetchTickets());
    }

    public selectAllTickets(): Observable<ReadonlyArray<Ticket>> {
        return this.store.pipe(select(getTicketsAll));
    }

    public selectTicketById(ticketId: number): Observable<Ticket> {
        return this.store.pipe(select(getTicketById, { ticketId }));
    }

    public hasTickets(): Observable<boolean> {
        return this.store.pipe(select(hasTickets));
    }

    public filterTickets(filter: string): Observable<ReadonlyArray<Ticket>> {
        return this.store.pipe(select(filterTickets, { filter }));
    }

    public toggleTicketCompleteness(ticketId: number, completeness: boolean): void {
        this.store.dispatch(toggleTicketCompleteness({ ticketId, completeness }));
    }

    public createTicket(ticket: Ticket): void {
        this.store.dispatch(createTicket({ ticket }));
    }

    public assignUser(ticketId: number, userId: number): void {
        this.store.dispatch(assignUser({ ticketId, userId }));
    }
}
