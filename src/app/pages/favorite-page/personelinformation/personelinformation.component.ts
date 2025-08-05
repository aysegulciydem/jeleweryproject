import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {DatePipe} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
    selector: 'app-personelinformation',
    standalone: true,
    imports: [CommonModule, MatTabsModule, DatePipe, FormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,FormsModule, MatFormFieldModule, ReactiveFormsModule,MatIconModule,MatButtonModule, MatDividerModule,],
    templateUrl: './personelinformation.component.html',
    styleUrls: ['./personelinformation.component.css'],
    providers: [provideNativeDateAdapter()],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonelinformationComponent {
  membershipForm: FormGroup;
  tabLoadTimes: Date[] = [];
  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }
    return this.tabLoadTimes[index];
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  constructor(private fb: FormBuilder) {
    this.membershipForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: [''],
      postalCode: ['']
    });
  }
  onSubmit() {
    if (this.membershipForm.valid) {
      console.log('Form submitted:', this.membershipForm.value);
    } else {
      console.log('Form is not valid!');
    }
  }
  hideCurrent = true;
  hideNew = true;
  hideNewAgain = true;

  currentPassword = '';
  newPassword = '';
  newPasswordAgain = '';

}
