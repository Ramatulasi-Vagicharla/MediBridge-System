// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DocauthService {
//   private doctors = [
//     { username: 'Dr. Akshaya (General Medicine)', password: 'akshaya@2003' },
//     { username: 'Dr. Tulasi (Dermatologist)', password: 'tulasi@2003' },
//     { username: 'Dr. Vinutna (Cardiologist)', password: 'vinu@2003' }
//   ];

//   constructor() { }

//   authenticate(username: string, password: string) {
//     const doctor = this.doctors.find(doc => doc.username === username && doc.password === password);
//     if (doctor) {
//       sessionStorage.setItem('username', username);
//       return true;
//     } else {
//       return false;
//     }
//   }

//   isUserLoggedIn() {
//     console.log("doctor has logged in");
//     let user = sessionStorage.getItem('username');
//     console.log(user);
//     return !(user == null);
//   }

//   logout() {
//     console.log("doctor has loged out");
//     sessionStorage.removeItem('username');
//   }
// }
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {
  private doctors = [
    { username: 'Dr. Akshaya (General Medicine)', password: 'akshaya@2003' },
    { username: 'Dr. Tulasi (Dermatologist)', password: 'tulasi@2003' },
    { username: 'Dr. Vinutna (Cardiologist)', password: 'vinu@2003' }
  ];

  constructor() { }

  authenticate(username: string, password: string): boolean {
    const doctor = this.doctors.find(doc => doc.username === username && doc.password === password);
    if (doctor) {
      // Store username in session storage
      sessionStorage.setItem('username', username);
      return true; // Successful authentication
    } else {
      // Optional: You can implement logging or error messaging here
      console.error("Authentication failed for username: ", username);
      return false; // Authentication failed
    }
  }

  isUserLoggedIn(): boolean {
    console.log("Checking if doctor is logged in...");
    let user = sessionStorage.getItem('username');
    return user !== null; // Returns true if a user is logged in
  }

  logout(): void {
    console.log("Doctor has logged out.");
    sessionStorage.removeItem('username'); // Clear the stored username
  }

  getLoggedInDoctor(): string | null {
    return sessionStorage.getItem('username'); // Retrieve the logged-in doctor's username
  }
}
