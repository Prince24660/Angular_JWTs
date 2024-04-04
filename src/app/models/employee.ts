
export class Employee {
    empId:number;
    name:string;
    salary:number;
    depId:number;
    sklid:number;
    sklname:string;
    depName:string;
    constructor()
    {
        this.empId=0;
this.name="";
this.salary=0;
this.depId=0;
this.sklid=0;
this.sklname="";
this.depName="";
    }
}
export class EmployeeWithSkills
{
    employee:Employee;
    sklids:any[]=[];
    constructor() {
        this.employee=new Employee();
    }
}