import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../../domain/ticket.interface';
import { BackendService } from '../../services/backend.service';
import { ITicketsRepository } from './tickets.repository.interface';

@Injectable()
export class TicketsRepository implements ITicketsRepository {
    constructor(private readonly backendService: BackendService) {
    }

    public getTickets(): Observable<ReadonlyArray<Ticket>> {
        return this.backendService.tickets();
    }

    public getTicketById(ticketId: number): Observable<Ticket> {
        return this.backendService.ticket(ticketId);
    }

    public toggleTicketCompleteness(ticketId: number, completeness: boolean): Observable<Ticket> {
        return this.backendService.complete(ticketId, completeness);
    }

    public createTicket(ticket: Ticket): Observable<Ticket> {
        return this.backendService.newTicket(ticket);
    }

    public assignUser(ticketId: number, userId: number): Observable<Ticket> {
        return this.backendService.assign(ticketId, userId);
    }
}
