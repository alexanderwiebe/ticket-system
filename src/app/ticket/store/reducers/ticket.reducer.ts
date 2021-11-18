import { Action, createReducer, on } from '@ngrx/store';
import * as TicketActions from '../actions/ticket.actions';

export const ticketFeatureKey = 'ticket';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(TicketActions.loadTickets, state => state),
  on(TicketActions.loadTicketsSuccess, (state, action) => state),
  on(TicketActions.loadTicketsFailure, (state, action) => state),

);
