import { Component, Input } from '@angular/core';
import { Employee } from '@thisdot/employee';

@Component({
  selector: 'thisdot-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent {
  @Input()
  employees: Array<Employee>;
  constructor() {
    this.employees = [{ id: 1, name: '' }];
  }
}
