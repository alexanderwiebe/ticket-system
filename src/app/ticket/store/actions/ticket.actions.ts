import { createAction, props } from "@ngrx/store";
import { Ticket } from "src/app/backend.service";

export const loadTickets = createAction("[Ticket] Load Tickets");

export const loadTicketsSuccess = createAction(
  "[Ticket] Load Tickets Success",
  props<{ tickets: Ticket[] }>()
);

export const loadTicketsFailure = createAction(
  "[Ticket] Load Tickets Failure",
  props<{ error: any }>()
);

export const createTicket = createAction(
  "[Ticket] Create Tickets",
  props<{ ticket: Ticket }>()
);

export const createTicketSuccess = createAction(
  "[Ticket] Create Ticket Success",
  props<{ ticket: Ticket }>()
);

export const createTicketFailure = createAction(
  "[Ticket] Create Ticket Failure",
  props<{ error: any }>()
);

export const updateTicket = createAction(
  "[Ticket] Update Ticket",
  props<{ ticket: Ticket }>()
);

export const updateTicketSuccess = createAction(
  "[Ticket] Update Ticket Success",
  props<{ ticket: Ticket }>()
);

export const updateTicketFailure = createAction(
  "[Ticket] Update Ticket Failure",
  props<{ error: any }>()
);

export const noopTicket = createAction(
  "[Ticket] Noop",
  props<{ shtuff: any }>()
);
