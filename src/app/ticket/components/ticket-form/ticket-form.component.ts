import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
