import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TicketGuard } from "./core/ticket.guard";
import { TicketListComponent } from "./ticket/containers/ticket-list/ticket-list.component";
import { TicketComponent } from "./ticket/containers/ticket/ticket.component";

const routes: Routes = [
  { path: "", component: TicketListComponent, canActivate: [TicketGuard] },
  { path: "add", component: TicketComponent, canActivate: [TicketGuard] },
  { path: "edit/:id", component: TicketComponent, canActivate: [TicketGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
