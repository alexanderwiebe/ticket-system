import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { Observable } from "rxjs";
import { BackendService } from "src/app/backend.service";
import { UserEffects } from "./user.effects";

describe("UserEffects", () => {
  let actions$: Observable<any>;
  let effects: UserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserEffects,
        provideMockActions(() => actions$),
        { provide: BackendService, useValue: new BackendService() },
      ],
    });

    effects = TestBed.inject(UserEffects);
  });

  it("should be created", () => {
    expect(effects).toBeTruthy();
  });
});
