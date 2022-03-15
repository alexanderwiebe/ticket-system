import { Component, ViewEncapsulation } from "@angular/core";
import { BackendService } from "./backend.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  tickets = this.backend.tickets();
  users = this.backend.users();

  constructor(private backend: BackendService) {}
}
