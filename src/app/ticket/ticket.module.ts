import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatOptionModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { TicketFormComponent } from "./components/ticket-form/ticket-form.component";
import { TicketListFormComponent } from "./components/ticket-list-form/ticket-list-form.component";
import { TicketListComponent } from "./containers/ticket-list/ticket-list.component";
import { TicketComponent } from "./containers/ticket/ticket.component";
import { TicketEffects } from "./store/effects/ticket.effects";
import { UserEffects } from "./store/effects/user.effects";
import {
  reducer as ticketReducer,
  ticketFeatureKey,
} from "./store/reducers/ticket.reducer";
import {
  reducer as userReducer,
  userFeatureKey,
} from "./store/reducers/user.reducer";

@NgModule({
  declarations: [
    TicketListComponent,
    TicketComponent,
    TicketFormComponent,
    TicketListFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(ticketFeatureKey, ticketReducer),
    StoreModule.forFeature(userFeatureKey, userReducer),
    EffectsModule.forFeature([TicketEffects, UserEffects]),
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
  ],
})
export class TicketModule {}
