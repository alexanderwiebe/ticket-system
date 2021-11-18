import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, first, switchMap, tap } from "rxjs/operators";
import { loadTickets } from "../ticket/store/actions/ticket.actions";
import { selectTicketsLoaded } from "../ticket/store/selectors/ticket.selectors";

@Injectable({
  providedIn: "root",
})
export class TicketGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(): Observable<any> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<any> {
    return this.store.select(selectTicketsLoaded).pipe(
      tap((loaded: boolean) => {
        if (!loaded) {
          this.store.dispatch(loadTickets());
        }
      }),
      first()
    );
  }
}
