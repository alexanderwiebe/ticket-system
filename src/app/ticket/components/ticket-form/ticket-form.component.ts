import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Dictionary } from "@ngrx/entity";
import { Ticket, User } from "src/app/backend.service";

@Component({
  selector: "app-ticket-form",
  templateUrl: "./ticket-form.component.html",
  styleUrls: ["./ticket-form.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketFormComponent implements OnInit {
  @Input() ticket: Ticket;
  @Input() users: User[];
  @Input() usersById: Dictionary<User>;
  @Output() saveTicket = new EventEmitter<Ticket>();
  @Output() updateTicket = new EventEmitter<Ticket>();

  form = this.fb.group({
    id: [],
    description: ["", Validators.required],
    assigneeId: [],
    completed: [false],
  });

  formError = false;
  selectedUserId: number = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.ticket) {
      this.form.patchValue(this.ticket);
      this.selectedUserId = this.ticket.assigneeId;
    }
  }

  save(): void {
    if (this.form.valid) {
      this.saveTicket.emit(this.form.value);
      this.formError = false;
    } else {
      this.formError = true;
    }
  }

  update(): void {
    if (this.form.valid) {
      this.updateTicket.emit(this.form.value);
      this.formError = false;
    } else {
      this.formError = true;
    }
  }

  complete(): void {
    if (this.form.valid) {
      this.form.get("completed").setValue(true);
      this.updateTicket.emit(this.form.value);
    }
  }

  userSelected({ value }) {
    this.form.get("assigneeId").setValue(value);
  }

  cancel() {
    console.log("works");
  }
}
