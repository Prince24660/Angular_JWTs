import { EmailValidator } from "@angular/forms";

export class User {
    id:number;
    firstName:string;
    lastName:string;
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
    phoneNumber: number;
    isActive:boolean;
    role: string;
  
    constructor() {
        this.id=0;
        this.firstName="";
        this.lastName="";
        this.username="";
        this.password="";
        this.confirmPassword="";
        this.email="";
        this.phoneNumber=0;
        this.isActive=true;
        this.role="";
    }
}
