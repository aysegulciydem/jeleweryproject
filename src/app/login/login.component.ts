import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, RouterOutlet } from '@angular/router';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { threadId } from 'node:worker_threads';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,  MatButtonModule, MatIconModule, MatDividerModule, MatError,MatInputModule,MatFormFieldModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm: FormGroup;
password: FormControl;
  hide(): boolean {
    return this.hidePassword;
  }
  clickEvent(event: Event): void {
    this.hidePassword = !this.hidePassword;  // Şifreyi gizleme veya gösterme işlemi
  }
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = signal('');
  constructor(private fb: FormBuilder) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // E-posta kontrolü
      password: ['', [Validators.required, Validators.minLength(6)]],  // Şifre kontrolü
    })
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
  hidePassword: boolean = true;  // Başlangıç değeri true (password gizli)

  onSubmit(){
    // if(
    //   this.loginForm.valid
    // ){
    //   console.log('Form geçerli, işlem başarılı');
    // }
    // else{
    //   console.log('Form hatalı, gerekli alanları doldurunuz.');
    // }
    if(this.loginForm.valid){
      const emailValue= this.loginForm.get('email')?.value;
      const  passwordValue = this.loginForm.get('password')?.value;
      console.log('Email:', emailValue);
      console.log('Password:', passwordValue);
    }
    else{
      console.log('Form is valid');
    }
   
  }

}
