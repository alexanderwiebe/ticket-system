import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Ticket } from "src/app/backend.service";

@Component({
  selector: "app-ticket-form",
  templateUrl: "./ticket-form.component.html",
  styleUrls: ["./ticket-form.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketFormComponent implements OnInit {
  @Input() ticket: Ticket;
  @Output() saveTicket = new EventEmitter<Ticket>();

  form = this.fb.group({
    description: ["", Validators.required],
    assigneeId: [],
    completed: [false],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.ticket) {
      this.form.patchValue(this.ticket);
    }
  }

  save() {
    if (this.form.valid) {
      this.saveTicket.emit(this.form.value);
    }
  }

  cancel() {}
}
