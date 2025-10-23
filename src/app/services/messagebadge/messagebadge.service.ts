import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagebadgeService {
  private messageCountSource = new BehaviorSubject<number>(0);
  messageCount$ = this.messageCountSource.asObservable();
  incrementCount() {
    this.messageCountSource.next(this.messageCountSource.value + 1);
  }
  decrementCount() {
    const currentCount = this.messageCountSource.value;
    if (currentCount > 0) {
      this.messageCountSource.next(currentCount - 1);
    }
  }
  resetCount() {
    this.messageCountSource.next(0);
  }
}
