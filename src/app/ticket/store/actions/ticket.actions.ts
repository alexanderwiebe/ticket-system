import { createAction, props } from '@ngrx/store';

export const loadTickets = createAction(
  '[Ticket] Load Tickets'
);

export const loadTicketsSuccess = createAction(
  '[Ticket] Load Tickets Success',
  props<{ data: any }>()
);

export const loadTicketsFailure = createAction(
  '[Ticket] Load Tickets Failure',
  props<{ error: any }>()
);
