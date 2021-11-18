import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromTicket from "../reducers/ticket.reducer";

export const selectTicketState = createFeatureSelector<fromTicket.State>(
  fromTicket.ticketFeatureKey
);

export const {
  selectIds: selectTicketIds,
  selectEntities: selectTicketEntities,
  selectAll: selectAllTickets,
  selectTotal: selectTotalTickets,
} = fromTicket.adapter.getSelectors(selectTicketState);

export const selectTicketsLoaded = createSelector(
  selectTicketState,
  (state: fromTicket.State) => state.loaded
);
