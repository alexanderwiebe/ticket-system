import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { Dictionary } from "@ngrx/entity";
import { Ticket, User } from "src/app/backend.service";

@Component({
  selector: "app-ticket-list-form",
  templateUrl: "./ticket-list-form.component.html",
  styleUrls: ["./ticket-list-form.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketListFormComponent implements OnInit {
  @Input() tickets: Ticket[];
  @Input() usersById: Dictionary<User>;
  @Output() openTicket = new EventEmitter<Ticket>();

  constructor() {}

  ngOnInit(): void {}

  ticketClick(ticket: Ticket) {
    this.openTicket.emit(ticket);
  }
}
