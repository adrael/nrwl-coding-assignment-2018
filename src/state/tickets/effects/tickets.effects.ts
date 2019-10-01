import { HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Ticket } from '../../../domain/ticket.interface';
import { I_TICKETS_REPOSITORY, ITicketsRepository } from '../../../repositories/tickets/tickets.repository.interface';
import {
    assignUser,
    assignUserFailure,
    assignUserSuccess,
    createTicket,
    createTicketFailure,
    createTicketSuccess,
    fetchTickets,
    fetchTicketsFailure,
    fetchTicketsSuccess,
    toggleTicketCompleteness,
    toggleTicketCompletenessFailure,
    toggleTicketCompletenessSuccess
} from '../actions/tickets.actions';

@Injectable()
export class TicketsEffects {
    public readonly getTickets$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchTickets),
            switchMap(() => {
                return this.ticketsRepository.getTickets().pipe(
                    map((tickets: Array<Ticket>) => fetchTicketsSuccess({ tickets })),
                    catchError(({ message }: HttpErrorResponse) => of(fetchTicketsFailure({ error: message })))
                );
            })
        )
    );

    public readonly toggleTicketCompleteness$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(toggleTicketCompleteness),
            switchMap(({ ticketId, completeness }: { ticketId: number, completeness: boolean }) => {
                return this.ticketsRepository.toggleTicketCompleteness(ticketId, completeness).pipe(
                    map((ticket: Ticket) => toggleTicketCompletenessSuccess({ ticket })),
                    catchError(({ message }: HttpErrorResponse) => of(toggleTicketCompletenessFailure({ error: message })))
                );
            })
        )
    );

    public readonly createTicket$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(createTicket),
            switchMap(({ ticket }: { ticket: Ticket }) => {
                return this.ticketsRepository.createTicket(ticket).pipe(
                    map((ticket: Ticket) => createTicketSuccess({ ticket })),
                    catchError(({ message }: HttpErrorResponse) => of(createTicketFailure({ error: message })))
                );
            })
        )
    );

    public readonly assignUser$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(assignUser),
            switchMap(({ ticketId, userId }: { ticketId: number, userId: number }) => {
                return this.ticketsRepository.assignUser(ticketId, userId).pipe(
                    map((ticket: Ticket) => assignUserSuccess({ ticket })),
                    catchError(({ message }: HttpErrorResponse) => of(assignUserFailure({ error: message })))
                );
            })
        )
    );

    constructor(
        private readonly actions$: Actions,
        @Inject(I_TICKETS_REPOSITORY) private readonly ticketsRepository: ITicketsRepository
    ) {
    }
}
