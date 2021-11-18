import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map } from "rxjs/operators";
import { BackendService } from "src/app/backend.service";
import * as TicketActions from "../actions/ticket.actions";

@Injectable()
export class TicketEffects {
  loadTickets$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TicketActions.loadTickets),
      concatMap(() =>
        this.service.tickets().pipe(
          map((tickets) => TicketActions.loadTicketsSuccess({ tickets })),
          catchError((error) => of(TicketActions.loadTicketsFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private service: BackendService) {}
}
