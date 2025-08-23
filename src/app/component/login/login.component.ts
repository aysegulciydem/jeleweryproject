import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule} from '@angular/router';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { threadId } from 'node:worker_threads';
import { MatCheckboxModule } from '@angular/material/checkbox';



@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDividerModule,
    MatError,
    MatCheckboxModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']   
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword: boolean = true;  
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = signal('');

  constructor(private fb: FormBuilder) {
    merge(this.email.statusChanges, this.email.valueChanges) .pipe(takeUntilDestroyed()).subscribe(() => this.updateErrorMessage());

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  hide(): boolean {
    return this.hidePassword;
  }

  clickEvent(event: Event): void {
    this.hidePassword = !this.hidePassword;
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password, rememberMe } = this.loginForm.value;
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Remember Me:', rememberMe);
    } else {
      console.log('Form is invalid, gerekli alanları doldurunuz.');
    }
   
  }
}

