import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { Dictionary } from "@ngrx/entity";
import { select, Store } from "@ngrx/store";
import { combineLatest, Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { Ticket, User } from "src/app/backend.service";
import { selectAllTickets } from "../../store/selectors/ticket.selectors";
import { selectUserEntities } from "../../store/selectors/user.selectors";

@Component({
  selector: "app-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: "container" },
  encapsulation: ViewEncapsulation.None,
})
export class TicketListComponent implements OnInit {
  public tickets$: Observable<Ticket[]>;
  public userEntities$: Observable<Dictionary<User>>;

  form = this.fb.group({
    search: [""],
  });

  constructor(
    private store: Store,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.userEntities$ = this.store.pipe(select(selectUserEntities));

    this.tickets$ = combineLatest([
      this.form.get("search").valueChanges.pipe(startWith("")),
      this.store.pipe(select(selectAllTickets)),
      this.userEntities$,
    ]).pipe(
      map(([search, tickets, userEntities]) => {
        const query = (search as any).toLowerCase();
        return tickets.filter((ticket) => {
          const user = userEntities[ticket.assigneeId];
          if (user?.name.toLowerCase().includes(query)) {
            return true;
          }
          if (ticket.description.toLowerCase().includes(query)) {
            return true;
          }
        });
      })
    );
  }

  ngOnInit(): void {}

  navToTicket(ticket: Ticket) {
    this.router.navigate(["edit/" + ticket.id]);
  }
}
