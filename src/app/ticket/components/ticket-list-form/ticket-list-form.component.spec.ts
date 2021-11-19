import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { TicketListFormComponent } from "./ticket-list-form.component";

describe("TicketListFormComponent", () => {
  let component: TicketListFormComponent;
  let fixture: ComponentFixture<TicketListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, MatTableModule],
      declarations: [TicketListFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
