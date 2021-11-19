import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Ticket } from "src/app/backend.service";
import * as TicketActions from "../actions/ticket.actions";

export const ticketFeatureKey = "ticket";

export interface State extends EntityState<Ticket> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Ticket> = createEntityAdapter<Ticket>({});

export const initialState: State = adapter.getInitialState({
  loading: false,
  loaded: false,
});

export const reducer = createReducer(
  initialState,

  on(TicketActions.loadTickets, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(TicketActions.loadTicketsSuccess, (state, { tickets }) =>
    adapter.upsertMany(tickets, { ...state, loading: false, loaded: true })
  ),
  on(TicketActions.loadTicketsFailure, (state, action) => ({
    ...state,
    loading: false,
    loaded: false,
  })),
  on(TicketActions.createTicket, TicketActions.updateTicket, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(
    TicketActions.createTicketSuccess,
    TicketActions.updateTicketSuccess,
    (state, { ticket }) =>
      adapter.upsertOne(ticket, { ...state, loading: false, loaded: true })
  )
);
