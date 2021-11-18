import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as TicketActions from '../actions/ticket.actions';



@Injectable()
export class TicketEffects {

  loadTickets$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(TicketActions.loadTickets),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => TicketActions.loadTicketsSuccess({ data })),
          catchError(error => of(TicketActions.loadTicketsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
