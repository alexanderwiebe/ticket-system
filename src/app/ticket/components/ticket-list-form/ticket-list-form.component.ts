import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { Ticket } from "src/app/backend.service";

@Component({
  selector: "app-ticket-list-form",
  templateUrl: "./ticket-list-form.component.html",
  styleUrls: ["./ticket-list-form.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketListFormComponent implements OnInit {
  @Input() tickets: Ticket[];

  constructor() {}

  ngOnInit(): void {}
}
