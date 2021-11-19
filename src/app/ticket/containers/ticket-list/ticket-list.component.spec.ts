import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { of } from "rxjs";
import { TicketListFormComponent } from "../../components/ticket-list-form/ticket-list-form.component";
import { ticketFeatureKey } from "../../store/reducers/ticket.reducer";
import { userFeatureKey } from "../../store/reducers/user.reducer";
import { TicketListComponent } from "./ticket-list.component";

describe("TicketListComponent", () => {
  let component: TicketListComponent;
  let fixture: ComponentFixture<TicketListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TicketListComponent, TicketListFormComponent],
      providers: [
        provideMockStore({
          initialState: {
            [ticketFeatureKey]: {
              entities: {},
              ids: [],
            },
            [userFeatureKey]: {
              entities: {},
              ids: [],
            },
          },
        }),
        { provide: Router, useValue: { params: of(1) } },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
