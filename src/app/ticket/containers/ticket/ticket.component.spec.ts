import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { TicketFormComponent } from "../../components/ticket-form/ticket-form.component";
import { ticketFeatureKey } from "../../store/reducers/ticket.reducer";
import { userFeatureKey } from "../../store/reducers/user.reducer";
import { TicketComponent } from "./ticket.component";

describe("TicketComponent", () => {
  let component: TicketComponent;
  let fixture: ComponentFixture<TicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [TicketComponent, TicketFormComponent],
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
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
