import { Component } from '@angular/core';
import { FlightDataService } from '@nx-tuto/flight-data';

@Component({
  selector: 'nx-tuto-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
})
export class FlightSearchComponent {
  flightList$ = this.flightService.load();

  constructor(private flightService: FlightDataService) {}
}
