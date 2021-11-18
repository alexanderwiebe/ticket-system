import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { Ticket } from "src/app/backend.service";

@Component({
  selector: "app-ticket-form",
  templateUrl: "./ticket-form.component.html",
  styleUrls: ["./ticket-form.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketFormComponent implements OnInit {
  @Input() ticket: Ticket;

  constructor() {}

  ngOnInit(): void {}
}
