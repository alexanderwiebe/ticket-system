import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Dictionary } from "@ngrx/entity";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Ticket, User } from "src/app/backend.service";
import { selectAllTickets } from "../../store/selectors/ticket.selectors";
import { selectUserEntities } from "../../store/selectors/user.selectors";

@Component({
  selector: "app-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketListComponent implements OnInit {
  public tickets$: Observable<Ticket[]>;
  public userEntities$: Observable<Dictionary<User>>;
  constructor(private store: Store, private router: Router) {
    this.tickets$ = this.store.pipe(select(selectAllTickets));
    this.userEntities$ = this.store.pipe(select(selectUserEntities));
  }

  ngOnInit(): void {}

  navToTicket(ticket: Ticket) {
    this.router.navigate(["edit/" + ticket.id]);
  }
}
