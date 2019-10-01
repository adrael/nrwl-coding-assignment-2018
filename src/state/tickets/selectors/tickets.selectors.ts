import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Ticket } from '../../../domain/ticket.interface';
import { RootTicketsState } from '../reducers';
import { ticketsAdapter, TicketsState } from '../reducers/tickets.reducer';

export const getTicketsState = createFeatureSelector<RootTicketsState, TicketsState>('tickets');

export const {
    selectIds: getTicketsIds,
    selectTotal: getTicketsTotal,
    selectAll: getTicketsAll,
    selectEntities: getTicketsEntities
} = ticketsAdapter.getSelectors<RootTicketsState>(getTicketsState);

export const hasTickets = createSelector(
    getTicketsTotal,
    (count: number) => count > 0
);

export const getTicketById = createSelector(
    getTicketsAll,
    (tickets: ReadonlyArray<Ticket>, { ticketId }: { ticketId: number }) => {
        return tickets.find((ticket: Ticket) => ticket.id === ticketId);
    }
);

export const filterTickets = createSelector(
    getTicketsAll,
    (tickets: ReadonlyArray<Ticket>, { filter }: { filter: string }) => {
        return tickets.filter((ticket: Ticket) => {
            if (!isNaN(+filter) && (+filter === ticket.id || +filter === ticket.assigneeId)) {
                return true;
            }

            return ticket.description.indexOf(filter) !== -1;


        });
    }
);
