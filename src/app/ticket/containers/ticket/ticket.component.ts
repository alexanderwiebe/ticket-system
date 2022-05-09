import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Dictionary } from "@ngrx/entity";
import { select, Store } from "@ngrx/store";
import { combineLatest, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Ticket, User } from "src/app/backend.service";
import { createTicket, updateTicket } from "../../store/actions/ticket.actions";
import { selectTicketEntities } from "../../store/selectors/ticket.selectors";
import {
  selectAllUsers,
  selectUserEntities,
} from "../../store/selectors/user.selectors";

@Component({
  selector: "app-ticket",
  templateUrl: "./ticket.component.html",
  styleUrls: ["./ticket.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: "container" },
  encapsulation: ViewEncapsulation.None,
})
export class TicketComponent implements OnInit {
  ticket$: Observable<Ticket>;
  users$: Observable<User[]>;
  usersById$: Observable<Dictionary<User>>;

  constructor(private store: Store, private route: ActivatedRoute) {
    this.ticket$ = combineLatest([
      this.store.pipe(select(selectTicketEntities)),
      this.route.params,
    ]).pipe(map(([entities, params]) => entities[params.id]));
    this.users$ = this.store.pipe(select(selectAllUsers));
    this.usersById$ = this.store.pipe(select(selectUserEntities));
  }

  ngOnInit(): void {}

  onSave(ticket: Ticket) {
    this.store.dispatch(createTicket({ ticket }));
  }

  onUpdate(ticket: Ticket) {
    this.store.dispatch(updateTicket({ ticket }));
  }
}
