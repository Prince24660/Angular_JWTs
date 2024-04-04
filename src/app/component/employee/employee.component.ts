import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { Employee, EmployeeWithSkills } from 'src/app/models/employee';
import { Skill } from 'src/app/models/skill';
import { EmployeeService } from 'src/app/services/employee.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
 import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
emplist : Employee[]=[];  
newemployee:Employee = new Employee();
editemployee:Employee=new Employee();
[x: string]: any;
pagedItems: any[] = []; // Array to hold paged items
pageSize: number = 10; // Number of items per page
totalItems: number = 0; // Total number of items
pageSizeOptions: number[] = [5, 10, 25, 100]; 
deplist:Department[]=[];
skllist:Skill[]=[];
selectedDepartment: number = 0;
selectedskill: number = 0;
selectedSkills: { [key: number]: boolean } = {};
emplists: any[] = []; // Assuming emplist is your array of employees
searchResults: any[] = []; // Array to store search results
searchTerm: string = '';
ispopupopen:boolean=false;
dropdownList:any = [];
selectedItems:any = [];
dropdownSettings:any = {};
isname:boolean=false;
issalary:boolean=false;
isdepid:boolean=false;
isdepname:boolean=false;
hidemodal:string="";
issklid:boolean=false;
issklname:boolean=false;
singleSelection:boolean=false;
   showDepartments = false;
  dropDownForm: any;
  p: number = 1;
  sortKey: string = 'name'; // Initial sort key
  sortReverse: boolean = false;

constructor(private employeeservice:EmployeeService,private loginservice:LoginService,private router:Router) { }
ngOnInit(): void {
  this.getallemployee();
  //this.employeeservice.success('Employees loaded successfully!', 'Success');

  this.getAllDepartment();
this.getAllSkill();
//this.SaveEmployees();
this.dropdownList = [
  { item_id: 5, item_text: 'c' },
  { item_id: 6, item_text: 'c#' },
  { item_id: 7, item_text: 'java' },
  { item_id: 9, item_text: 'python' },
];





this.dropdownSettings = {
  singleSelection: false,
  idField: 'item_id',
  textField: 'item_text',
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  itemsShowLimit: 1889,
  allowSearchFilter: true
};
}
onPageChange(event: PageEvent) {debugger
  const startIndex = event.pageIndex * event.pageSize;
  this.pagedItems = this.emplist.slice(startIndex, startIndex + event.pageSize);
}

getPagedItems() {debugger
  this.pagedItems = this.emplist.slice(0, this.pageSize);
}
sortBy(key: string) {debugger
  if (this.sortKey === key) {
    this.sortReverse = !this.sortReverse;
  } else {debugger
    this.sortKey = key;
    this.sortReverse = false;
  }
  // Perform sorting
  this.sortList();
}

sortList() {debugger
  this.emplist.sort((a, b) => {
    const valueA = this.getNestedPropertyValue(a, this.sortKey);
    const valueB = this.getNestedPropertyValue(b, this.sortKey);
    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return this.sortReverse ? valueB.localeCompare(valueA) : valueA.localeCompare(valueB);
    } else {debugger
      return this.sortReverse ? valueB - valueA : valueA - valueB;
    }
  });
}

getNestedPropertyValue(obj: any, key: string): any {debugger
  return key.split('.').reduce((o, k) => (o || {})[k], obj);
}
// showToastr() {
//   debugger
//   this.employeeservice.success('Data added successfully!', 'Success');
// }
onDepIdChange() {
  this.isdepid = false; // Reset the error flag when a department is selected
}
onsalarychange()
{
  this.issalary=false;
}
onName()
{
  this.isname=false;
}

OnSkilIdchange()
{
  this.issklid=false;
}
onItemSelect(selectedItems: any) {
  debugger;
  console.log(this.selectedItems);
}
SaveEmployees() {
  debugger;
  let model = new EmployeeWithSkills();
  model.employee = this.newemployee;
  var selectsklid = this.selectedItems;

  // Clear existing skill IDs in the model
  model.sklids = [];

  // Map only the selected skill IDs
  selectsklid.forEach((item: { item_id: any }) => {
    model.sklids.push(item.item_id); 
  });

  if (this.newemployee.depId.toString() == "Hr") {
    model.employee.depId = 1;
  } else if (this.newemployee.depId.toString() == "sales") {
    model.employee.depId = 2;
  } else if (this.newemployee.depId.toString() == "Developer") {
    model.employee.depId = 3;
  }

  if (
    model.employee.name != "" &&
    model.employee.salary != 0 &&
    model.employee.depId != 0 &&
    model.sklids.length > 0 // Check if at least one skill is selected
  ) {
    this.ispopupopen = false;

    this.employeeservice.SaveEmployee(model).subscribe(
      (response) => {
        Swal.fire("Data Saved Succefully");
        debugger;
        this.newemployee.name = "";
        this.newemployee.salary = 0;
        this.newemployee.depId = 0;
        this.selectedItems = []; // Clear selected items
        this.getallemployee();
        console.log(response);
        this.router.navigate([this.router.url]);
      },
      (error) => {
        debugger;
        console.log(error);
      }
    );
  } else  {
     Swal.fire("Validation Error", "Please fill out all required fields", "error");
    this.isname = true;
    this.issalary = true;
    this.isdepid = true;
    this.isdepname = true;
    this.issklid = true;
    this.issklname = true;
  }
}
checkSkillsSelected()
{debugger
  this.issklid = this.selectedItems && this.selectedItems.length > 0;
}

selectItems(event:any){
debugger
}

onSelectAll(ev:any)
{
debugger
}
singleSelectionMethod(ev:any)
{debugger
console.log(ev); 
var target=ev.target;
if(target.checked)
{
  this.dropdownSettings={
    ...this.dropdownSettings,
    singleSelection:true
  }
} else
{
  this.dropdownSettings={
    ...this.dropdownSettings,
    singleSelection:false
}
}
}
getAllDepartment()
{
this.employeeservice.GetAllDep().subscribe(
  (response)=>{
    debugger
this.deplist=response;
  },
  (error)=>{
    console.log(error);
  }
)
}


getAllSkill()
{debugger
this.employeeservice.GetAllSkl().subscribe(
  (response)=>{
this.skllist=response;
this.dropdownList = this.skllist.map(skl=>({
  item_id:skl.sklid,
  item_text:skl.sklname

}))
  },
  (error)=>{
    console.log(error);
  }
)
}

getallemployee()
{
  debugger
  this.employeeservice.GetAllemp().subscribe(
    (response)=>{
      debugger
      this.emplist=response;
      this.employeeservice.emplist=JSON.parse(JSON.stringify(this.emplist));
    },
    (error)=>{
      console.log(error);
    }
    )
  
}
onSearch() {
  debugger
  this.emplist = this.employeeservice.emplist.filter(employee => {
    // You can customize the  search condition based on your requirements
    return employee.name.toLowerCase().includes(this.searchTerm.toLowerCase());
  });
}
editclick(i:number)
{
  Swal.fire("Data")
  debugger
this.editemployee.empId=this.emplist[i].empId;
this.editemployee.name=this.emplist[i].name;
this.editemployee.salary=this.emplist[i].salary;
this.editemployee.depName=this.emplist[i].depName;
this.editemployee.depId=this.emplist[i].depId;
this.dropdownList.sklname=this.emplist[i].sklid ;
}


Saveclicksweetalert()
{debugger
  Swal.fire({
    title: "Saving...",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
     // this.SaveEmployees()
      
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
}
UpdateEmployees() {
  debugger;
  let model = new EmployeeWithSkills();
  model.employee = this.editemployee;
  var selectsklid = this.selectedItems;
  // Fetch depId based on depName
  model.sklids = [];

  // Map only the selected skill IDs
  selectsklid.forEach((item: { item_id: any }) => {
    model.sklids.push(item.item_id); 
  });

  const number = Number(this.editemployee.depId);
  const selectedDepartment = this.deplist.find(dep => dep.depId == number);
  if (
    model.employee.name != "" &&
    model.employee.salary != 0 &&
    model.employee.depId != 0 &&
    model.sklids.length > 0 // Check if at least one skill is selected
  )  {
    this.ispopupopen = false;
  if (model) {
    debugger
    this.employeeservice.UpdateEmplpoyee(this.editemployee).subscribe(
      (response) => {debugger
        this.getallemployee();
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  } else {debugger
    console.log("Selected department not found.");
  }
}




createClick()
{
  this.ispopupopen=true;
}
// SaveEmployees()
// {debugger
//   let model=new EmployeeWithSkills();
//   model.employee=this.newemployee;
//  var selectsklid=this.selectedItems;

//   this.dropdownList.map((item: { item_id: any; }) => item.item_id).forEach((element: any) => {
//    model.sklids.push(+element);
  
//   });
  
//   if(this.newemployee.depId.toString()=="Hr")
//   {
// model.employee.depId=1;
//   }
//   else if(this.newemployee.depId.toString()=="sales")
//   {
// model.employee.depId=2;
//   }
//   else if(this.newemployee.depId.toString()=="Developer")
//   {
// model.employee.depId=3;
//   }


//   //this.newemployee.sklid=this.dropdownList.map(item => item.item_id).join(',');

//   if(model.employee.name!="" && model.employee.salary != 0 && model.employee.depId !=0){
//     this.ispopupopen=false;
   

//      this.employeeservice.SaveEmployee(model).subscribe(
//      (response)=>{debugger
//         this.newemployee.name="";
//         this.newemployee.salary=0;
//         this.newemployee.depId=0;
//         this.dropdownList.Skill="";
    
//         this.getallemployee();
//         console.log (response);
//       },
//     (error)=>{debugger;
//       console.log(error);
//     }
//     )
//   }
//   else
//   {
//    this.isname=true;
//    this.issalary=true;
//    this.isdepid=true;
//    this.isdepname=true;
//    this.issklid=true;
//    this.issklname=true;
//   }
// }


Closeclicksweetalert()
{
  Swal.fire({
    title: 'Oops...',
    text: 'Close this function',
    icon: 'error',
    confirmButtonColor: 'btn btn-danger',
    confirmButtonText: 'Close',
  });
}

Deleteemployees(empId: number) {debugger
  if (confirm("Are you sure you want to delete data?")) {
    this.employeeservice.Deleteemployee(empId).subscribe(
      (response) => {debugger
        
        this.getallemployee();
        this.employeeservice.success('Employee deleted successfully!', 'Success');
      },
      (error) => {debugger
        console.log(error);
      }
    );
  }
}

onclicks()
{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Delete it!"
  })
  .then((result) => {

    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been delete.",
        icon: "success"
      });
    }
  });
}
}
