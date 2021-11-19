import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { combineLatest, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Ticket } from "src/app/backend.service";
import { createTicket, updateTicket } from "../../store/actions/ticket.actions";
import { selectTicketEntities } from "../../store/selectors/ticket.selectors";

@Component({
  selector: "app-ticket",
  templateUrl: "./ticket.component.html",
  styleUrls: ["./ticket.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketComponent implements OnInit {
  ticket$: Observable<Ticket>;

  constructor(private store: Store, private route: ActivatedRoute) {
    this.ticket$ = combineLatest([
      this.store.pipe(select(selectTicketEntities)),
      this.route.params,
    ]).pipe(map(([entities, params]) => entities[params.id]));
  }

  ngOnInit(): void {}

  onSave(ticket: Ticket) {
    this.store.dispatch(createTicket({ ticket }));
  }

  onUpdate(ticket: Ticket) {
    this.store.dispatch(updateTicket({ ticket }));
  }
}
