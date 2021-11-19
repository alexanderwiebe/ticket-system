import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, first, switchMap, tap } from "rxjs/operators";
import { loadUsers } from "../ticket/store/actions/user.actions";
import { selectUsersLoaded } from "../ticket/store/selectors/user.selectors";

@Injectable({
  providedIn: "root",
})
export class UserGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(): Observable<any> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<any> {
    return this.store.select(selectUsersLoaded).pipe(
      tap((loaded: boolean) => {
        if (!loaded) {
          this.store.dispatch(loadUsers());
        }
      }),
      first()
    );
  }
}
