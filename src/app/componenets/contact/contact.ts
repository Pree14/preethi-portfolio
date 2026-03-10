import { Component, NgZone, ChangeDetectorRef } from '@angular/core';
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

  constructor(private ngZone: NgZone, private cd: ChangeDetectorRef) {}

  sendEmail(form: any) {

    emailjs.send(
      'service_4bqhl0n',
      'template_iv357qo',
      form.value,
      '3S9tfeyT1_yDBzBxn'
    ).then(() => {

      this.message = "Message Sent Successfully!";
      this.messageType = "success";
      this.showMessage = true;

      this.cd.detectChanges();

      setTimeout(() => {
        this.showMessage = false;
        this.cd.detectChanges();
      }, 3000);

      form.reset();

    }).catch((error) => {
      console.log("Error Message",error);
      this.message = "Failed to send message";
      this.messageType = "error";
      this.showMessage = true;
      this.cd.detectChanges();
        setTimeout(() => {
        this.showMessage = false;
        this.cd.detectChanges
        }, 3000);
    });

  }

  closeAlert() {
  this.showMessage = false;
}
}

