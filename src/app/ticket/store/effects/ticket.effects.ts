import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
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

  createTickets$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TicketActions.createTicket),
      concatMap(({ ticket }) =>
        this.service.newTicket(ticket).pipe(
          map((ticket) => {
            this.snackBar.open("Ticket created", "", {
              horizontalPosition: "center",
              verticalPosition: "top",
              duration: 2000,
            });
            this.router.navigate(["../"]);
            return TicketActions.createTicketSuccess({ ticket });
          }),
          catchError((error) =>
            of(TicketActions.createTicketFailure({ error }))
          )
        )
      )
    );
  });

  updateTickets$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TicketActions.updateTicket),
      concatMap(({ ticket }) =>
        this.service.update(ticket.id, ticket).pipe(
          map((ticket) => {
            this.snackBar.open("Ticket updated", "", {
              horizontalPosition: "center",
              verticalPosition: "top",
              duration: 2000,
            });
            this.router.navigate(["../"]);
            return TicketActions.updateTicketSuccess({ ticket });
          }),
          catchError((error) =>
            of(TicketActions.updateTicketFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private service: BackendService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}
}
