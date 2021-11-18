import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ticket-list-form',
  templateUrl: './ticket-list-form.component.html',
  styleUrls: ['./ticket-list-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketListFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
