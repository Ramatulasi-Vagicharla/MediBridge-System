// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent {

// }

import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showCard = false;
  name = '';
  email = '';
  phone = '';

  cancel() {
    this.showCard = false;
    this.name = '';
    this.email = '';
    this.phone = '';
  }

  sendEmail() {
    const serviceID = 'service_book_app';
    const templateID = 'template_gyfedev';
    const templateParams = {
      name: this.name,
      email: this.email,
      phone: this.phone
    };

    emailjs.send(serviceID, templateID, templateParams, 'Dq9jD-i0oqvri6kNg')
      .then(() => {
        alert('Appointment booked! An email has been sent to the admin.');
        this.cancel();
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Failed to book appointment.');
      });
  }
}