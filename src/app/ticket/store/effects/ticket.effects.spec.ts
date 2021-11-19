import { TestBed } from "@angular/core/testing";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { RouterTestingModule } from "@angular/router/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { Observable } from "rxjs";
import { BackendService } from "src/app/backend.service";
import { TicketEffects } from "./ticket.effects";

describe("TicketEffects", () => {
  let actions$: Observable<any>;
  let effects: TicketEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule, RouterTestingModule],
      providers: [
        TicketEffects,
        provideMockActions(() => actions$),
        { provide: BackendService, useValue: new BackendService() },
      ],
    });

    effects = TestBed.inject(TicketEffects);
  });

  it("should be created", () => {
    expect(effects).toBeTruthy();
  });
});
