import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TicketEffects } from './ticket.effects';

describe('TicketEffects', () => {
  let actions$: Observable<any>;
  let effects: TicketEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TicketEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TicketEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
