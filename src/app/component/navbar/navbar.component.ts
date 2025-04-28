import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
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
import { ProductlistserviceService } from '../../services/productlistservice.service';
import {MatBadgeModule} from '@angular/material/badge';
import{MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
@Component({
  schemas: [(CUSTOM_ELEMENTS_SCHEMA)],
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, FormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatToolbar, MatBadgeModule,MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  protected readonly Constant = Constant;
  value = '';
  itemCount:number = 0;
  constructor(
    private router:Router,
    private productListService: ProductlistserviceService,
  ){}
  ngOnInit(): void {
    this.productListService.itemCount$.subscribe(count => {
      this.itemCount = count;
  });
  }
  closeMenuTimeout: any;

openMenu(trigger: MatMenuTrigger) {
  trigger.openMenu();
}

startCloseTimer(trigger: MatMenuTrigger) {
  this.closeMenuTimeout = setTimeout(() => {
    trigger.closeMenu();
  }, 1500); // 300ms sonra kapatır
}

cancelCloseTimer() {
  clearTimeout(this.closeMenuTimeout);
}

  goToLoginPage(){
    this.router.navigate(['/login']);
  }
  public goToHomePage(): void {
    this.router.navigate([''])
  }
  redirectShoppingCardPage(){
    this.router.navigate(['/productList']);
  }
  redirectRingsPage(event: Event): void{
    this.router.navigate(['/rings']);
  }
  redirectEarringsPage(event: Event): void{
    this.router.navigate(['/earrings']);
  }
}
