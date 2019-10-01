import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Ticket } from '../../../domain/ticket.interface';
import {
    assignUserSuccess,
    createTicketSuccess,
    fetchTicketsSuccess,
    toggleTicketCompletenessSuccess
} from '../actions/tickets.actions';

export interface TicketsState extends EntityState<Ticket> {
}

export const ticketsAdapter = createEntityAdapter<Ticket>({
    selectId: (ticket: Ticket) => ticket.id
});

export const ticketsInitialState: TicketsState = ticketsAdapter.getInitialState();

const reducer = createReducer(
    ticketsInitialState,
    on(fetchTicketsSuccess, (state: TicketsState, { tickets }: { tickets: Array<Ticket> }) =>
        ticketsAdapter.addAll(tickets, state)
    ),
    on(toggleTicketCompletenessSuccess, (state: TicketsState, { ticket }: { ticket: Ticket }) =>
        ticketsAdapter.updateOne({ id: ticket.id, changes: { completed: ticket.completed } }, state)
    ),
    on(assignUserSuccess, (state: TicketsState, { ticket }: { ticket: Ticket }) =>
        ticketsAdapter.updateOne({ id: ticket.id, changes: { assigneeId: ticket.assigneeId } }, state)
    ),
    on(createTicketSuccess, (state: TicketsState, { ticket }: { ticket: Ticket }) =>
        ticketsAdapter.addOne(ticket, state)
    )
);

export function ticketsReducer(state: TicketsState, action: Action): TicketsState {
    return reducer(state, action);
}
