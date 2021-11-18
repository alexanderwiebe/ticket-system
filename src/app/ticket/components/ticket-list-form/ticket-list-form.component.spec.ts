import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketListFormComponent } from './ticket-list-form.component';

describe('TicketListFormComponent', () => {
  let component: TicketListFormComponent;
  let fixture: ComponentFixture<TicketListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketListFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
