import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTicket from '../reducers/ticket.reducer';

export const selectTicketState = createFeatureSelector<fromTicket.State>(
  fromTicket.ticketFeatureKey
);