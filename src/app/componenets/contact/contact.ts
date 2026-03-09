import { Component, NgZone } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  message: string = "";
  messageType: string = "";
  showMessage: boolean = false;

  constructor(private ngZone: NgZone) {}

  sendEmail(form: any) {

    emailjs.send(
      'service_4bqhl0n',      // replace
      'template_iv357qo',     // replace
      form.value,
      '3S9tfeyT1_yDBzBxn'      // replace
    ).then(() => {

      this.message = "Message Sent Successfully!";
      this.messageType = "success";
      this.showMessage = true;
      this.ngZone.run(() => {
        setTimeout(() => {
        this.showMessage = false;
        }, 1000);
      })
    form.reset();

    }).catch((error) => {
      console.log("Error Message",error);
      this.message = "Failed to send message";
      this.messageType = "error";
      this.showMessage = true;
      this.ngZone.run(() => {
        setTimeout(() => {
        this.showMessage = false;
        }, 1000);
      })
    });

  }
}

