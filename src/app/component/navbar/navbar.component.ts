import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatToolbar} from "@angular/material/toolbar";
import {Constant} from "../../constants/contants";



@Component({
  schemas: [(CUSTOM_ELEMENTS_SCHEMA)],
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, FormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatToolbar],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  protected readonly Constant = Constant;
  value = '';
  constructor(
    private router:Router,
  ){}

  goToLoginPage(){
    this.router.navigate(['/login']);
  }

  public goToHomePage(): void {
    this.router.navigate([''])
  }

  redirectShoppingCardPage(){
    this.router.navigate(['/productList']);
  }
}
