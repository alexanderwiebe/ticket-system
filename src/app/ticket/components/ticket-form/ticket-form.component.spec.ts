import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TicketFormComponent } from "./ticket-form.component";

describe("TicketFormComponent", () => {
  let component: TicketFormComponent;
  let fixture: ComponentFixture<TicketFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should not save if invalid", () => {
    let spy = spyOn(component.saveTicket, "emit").and.returnValue(true);
    component.save();
    expect(spy).not.toHaveBeenCalled();
  });
});
