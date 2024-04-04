import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee,EmployeeWithSkills } from '../models/employee';
// import { Employee, EmployeeWithSkills } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  success(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
  emplist:Employee[]=[];
  constructor(private httpclient:HttpClient) { }
  GetAllemp():Observable<any>
  {
    return this.httpclient.get<any>("https://localhost:44377/api/Employee/Employee");
  }
  // CreateEmployee(newemployee:Employee):Observable<any>
  // {
  //   return this.httpclient.post<any>("",newemployee);
  // }
  GetAllDep():Observable<any>
  {
    return this.httpclient.get<any>("https://localhost:44377/api/Employee/index");
  }
  GetAllSkl():Observable<any>
  {
    return this.httpclient.get<any>("https://localhost:44377/api/Employee/skill");
  }
  SaveEmployee(newemployee:EmployeeWithSkills):Observable<Employee>
  {
    return this.httpclient.post<Employee>("https://localhost:44377/api/Employee/Create",newemployee)
  }
  UpdateEmplpoyee(editemployee:Employee):Observable<Employee>
  {debugger
    return this.httpclient.put<Employee>("https://localhost:44377/api/Employee/Update",editemployee);
  }
  Deleteemployee(Id: number): Observable<any> {
    return this.httpclient.delete<any>("https://localhost:44377/api/Employee/" + Id);
  }
}