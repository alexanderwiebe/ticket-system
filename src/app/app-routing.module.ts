import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TicketGuard } from "./core/ticket.guard";
import { TicketListComponent } from "./ticket/containers/ticket-list/ticket-list.component";

const routes: Routes = [
  { path: "", component: TicketListComponent, canActivate: [TicketGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
