import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { TicketFormComponent } from "./components/ticket-form/ticket-form.component";
import { TicketListFormComponent } from "./components/ticket-list-form/ticket-list-form.component";
import { TicketListComponent } from "./containers/ticket-list/ticket-list.component";
import { TicketComponent } from "./containers/ticket/ticket.component";
import { TicketEffects } from "./store/effects/ticket.effects";
import { reducer, ticketFeatureKey } from "./store/reducers/ticket.reducer";

@NgModule({
  declarations: [
    TicketListComponent,
    TicketComponent,
    TicketFormComponent,
    TicketListFormComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(ticketFeatureKey, reducer),
    EffectsModule.forFeature([TicketEffects]),
  ],
})
export class TicketModule {}
