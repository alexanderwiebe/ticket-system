import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Ticket } from "src/app/backend.service";
import { selectAllTickets } from "../../store/selectors/ticket.selectors";

@Component({
  selector: "app-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketListComponent implements OnInit {
  public tickets$: Observable<Ticket[]>;
  constructor(private store: Store) {
    this.tickets$ = this.store.pipe(select(selectAllTickets));
  }

  ngOnInit(): void {}
}
