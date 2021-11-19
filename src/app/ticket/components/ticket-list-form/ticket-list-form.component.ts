import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Dictionary } from "@ngrx/entity";
import { Ticket, User } from "src/app/backend.service";

@Component({
  selector: "app-ticket-list-form",
  templateUrl: "./ticket-list-form.component.html",
  styleUrls: ["./ticket-list-form.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketListFormComponent implements OnChanges {
  @Input() tickets: Ticket[];
  @Input() usersById: Dictionary<User>;
  @Output() openTicket = new EventEmitter<Ticket>();
  dataSource = new MatTableDataSource<Ticket>();
  displayedColumns = ["id", "description", "completed", "user"];
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.tickets && this.tickets) {
      this.dataSource.data = this.tickets;
    }
  }

  ticketClick(ticket: Ticket) {
    this.openTicket.emit(ticket);
  }
}
