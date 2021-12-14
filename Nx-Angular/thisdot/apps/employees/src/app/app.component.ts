import { Component } from '@angular/core';
// import { Employee } from '@thisdot/employee';
import { EmployeeService } from '@thisdot/ui';

@Component({
  selector: 'thisdot-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'employees';
  constructor(public employeeService: EmployeeService) {}
}
