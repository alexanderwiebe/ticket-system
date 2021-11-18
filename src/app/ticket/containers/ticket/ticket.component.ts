import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
