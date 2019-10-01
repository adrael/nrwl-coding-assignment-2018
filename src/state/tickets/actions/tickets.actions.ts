import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Ticket } from '../../../domain/ticket.interface';

export const fetchTickets = createAction('[Tickets API] Fetch tickets');
export const fetchTicketsSuccess = createAction(
    '[Tickets API] Fetch tickets success',
    props<{ tickets: Array<Ticket>; }>()
);
export const fetchTicketsFailure = createAction(
    '[Tickets API] Fetch tickets failure',
    props<{ error: HttpErrorResponse }>()
);

export const toggleTicketCompleteness = createAction(
    '[Tickets API] Toggle ticket completeness',
    props<{ ticketId: number, completeness: boolean }>()
);
export const toggleTicketCompletenessSuccess = createAction(
    '[Tickets API] Toggle ticket completeness success',
    props<{ ticket }>()
);
export const toggleTicketCompletenessFailure = createAction(
    '[Tickets API] Toggle ticket completeness failure',
    props<{ error: HttpErrorResponse }>()
);

export const createTicket = createAction(
    '[Tickets API] Create ticket',
    props<{ ticket: Ticket }>()
);
export const createTicketSuccess = createAction(
    '[Tickets API] Create ticket success',
    props<{ ticket: Ticket }>()
);
export const createTicketFailure = createAction(
    '[Tickets API] Create ticket failure',
    props<{ error: HttpErrorResponse }>()
);

export const assignUser = createAction(
    '[Tickets API] Assign user',
    props<{ ticketId: number, userId: number }>()
);
export const assignUserSuccess = createAction(
    '[Tickets API] Assign user success',
    props<{ ticket: Ticket }>()
);
export const assignUserFailure = createAction(
    '[Tickets API] Assign user failure',
    props<{ error: HttpErrorResponse }>()
);
