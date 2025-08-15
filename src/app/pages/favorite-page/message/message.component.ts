import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, DatePipe } from '@angular/common';
import { MessagebadgeService } from '../../../services/messagebadge/messagebadge.service';

@Component({
  selector: 'app-message',
  imports: [
    MatTabsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    DatePipe,
    CommonModule
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  messages: { subject: string; message: string; date: Date }[] = [];
  showForm: boolean = true; 
  constructor(private messagebadgeservice: MessagebadgeService) {}
  sendMessage(form: any) {
    if (form.valid) {
      this.messages.push({
        subject: form.value.subject,
        message: form.value.message,
        date: new Date()
      });
      this.messagebadgeservice.incrementCount();
      form.reset();
      this.showForm = false;
    }
  }
  openForm() {
    this.showForm = true;
  }
deleteMessage(index: number) {
  this.messages.splice(index, 1);
  this.messagebadgeservice.decrementCount();

  // Mesaj kalmadıysa formu tekrar aç
  if (this.messages.length === 0) {
    this.showForm = true;
  }
}


}

