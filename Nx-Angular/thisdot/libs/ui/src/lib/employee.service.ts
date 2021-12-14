import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '@thisdot/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees$: Observable<Employee[]>;
  constructor(private http: HttpClient) {
    this.employees$ = this.http.get<Employee[]>(
      'https://my-json-server.typicode.com/devpato/nx-fake-data/employees'
    );
  }
}
