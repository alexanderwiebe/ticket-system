import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TicketFormComponent } from "./components/ticket-form/ticket-form.component";
import { TicketListFormComponent } from "./components/ticket-list-form/ticket-list-form.component";
import { TicketListComponent } from "./containers/ticket-list/ticket-list.component";
import { TicketComponent } from "./containers/ticket/ticket.component";

@NgModule({
  declarations: [
    TicketListComponent,
    TicketComponent,
    TicketFormComponent,
    TicketListFormComponent,
  ],
  imports: [CommonModule],
})
export class TicketModule {}
