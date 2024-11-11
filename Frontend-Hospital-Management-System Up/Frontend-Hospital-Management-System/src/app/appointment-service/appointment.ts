export class Appointment {
    id:number=0;
    name:string=""
    age:string=""
    symptoms:string=""
    number:string=""
    assignedDoctor: string = ""; // Field for assigned doctor's name
    appointmentDate: Date = new Date(); // Field for appointment date
    status: boolean=false;
}
