import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TicketGuard } from "./core/ticket.guard";
import { UserGuard } from "./core/user.guard";
import { TicketListComponent } from "./ticket/containers/ticket-list/ticket-list.component";
import { TicketComponent } from "./ticket/containers/ticket/ticket.component";

const routes: Routes = [
  {
    path: "",
    component: TicketListComponent,
    canActivate: [TicketGuard, UserGuard],
  },
  {
    path: "add",
    component: TicketComponent,
    canActivate: [TicketGuard, UserGuard],
  },
  {
    path: "edit/:id",
    component: TicketComponent,
    canActivate: [TicketGuard, UserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
