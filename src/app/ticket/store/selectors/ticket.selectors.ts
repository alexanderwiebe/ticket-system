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

export const selectCompleted = createSelector(selectAllTickets, (tickets) => {
  // console.log("selectCompleted");
  return tickets.filter((ticket) => ticket.completed);
});

export const selectIncomplete = createSelector(selectAllTickets, (tickets) => {
  // console.log("selectIncomplete");
  return tickets.filter((ticket) => !ticket.completed);
});

export const selectTicketByType = createSelector(
  selectCompleted,
  selectIncomplete,
  (complete, incomplete) => {
    // console.log("selectTicketByType");
    return { complete, incomplete };
  }
);
