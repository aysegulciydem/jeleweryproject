import {
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  OnInit,
  signal,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule, NgIfContext } from '@angular/common';
import {MatToolbar} from "@angular/material/toolbar";
import {Router} from "@angular/router";
import { Product} from "../../model/products";
import {Constant} from "../../constants/contants";
import {MatDialog} from "@angular/material/dialog";
import {FormGroupDirective,NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import{MatDrawer} from '@angular/material/sidenav';
import { BraceletDetailDialogComponent } from './bracelet-detail-dialog/bracelet-detail-dialog.component';
import { ProductlistserviceService } from '../../services/productlistservice.service';
import { MultiCheckboxComponent } from '../../component/multi-checkbox/multi-checkbox.component';
import { BehaviorSubject } from 'rxjs';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
    schemas: [(CUSTOM_ELEMENTS_SCHEMA)],
    selector: 'app-bracelet',
    imports: [
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatExpansionModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatCheckboxModule,
        MatSliderModule,
        MatDividerModule,
        CommonModule,
        MatToolbar,
        ReactiveFormsModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatSliderModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatExpansionModule,
        MatCardModule,
        FormsModule,
        MatCardModule,
        MatDividerModule,
        MultiCheckboxComponent
    ],
    providers: [{ provide: MatPaginatorIntl }],
    templateUrl: './bracelet.component.html',
    styleUrl: './bracelet.component.css'
})
export class BraceletComponent {
  protected readonly Constant = Constant;
  isToggleOpen: boolean = false;
  value: any;
  showFiller = false;
  noProducts: TemplateRef<NgIfContext<boolean>>;
  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);
  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);
  matcher = new MyErrorStateMatcher();
  bracelets: Product[] = [];
  @Input() product!: Product;
  
  constructor(
    private readonly matDialog: MatDialog,
    private readonly router: Router,
    private readonly productListservice: ProductlistserviceService,
  ){
    this.bracelets = [];
    this.productListservice.getBracelets().subscribe((data: Product[]) => {
    this.bracelets = data; // diziyi doldur
    this.bracelets.forEach((product: Product) => {
      product.currentImage = product.imageUrl[0];
    });
  });}

  ngOnInit(): void {
  }

  addToCard(product: Product): void {
    this.productListservice.addToBasket(product);
    const goToCart = confirm("Product added to basket! Would you like to go to basket?");
    if(goToCart) {
      this.router.navigate(['/productList']);
    }
  }
  openProductDetailDialogComponent(product: Product): void {
    this.matDialog.open(BraceletDetailDialogComponent,
      {
        data: product,
        //disableClose: true
      }
    );
  }

  @ViewChild('drawer') drawer!: MatDrawer;
  toggleDrawer() {
    this.drawer.toggle();
  }
  toggleFavorite(product: Product): void {
    console.log('Favoriye ekleniyor:', product);
    this.productListservice.addToFavorite(product);
    this.router.navigate(['favorite-page', 'favorite']);
  }
  onMouseEnter(product: Product): void {
    product.currentImage = product.imageUrl[1];
  }
  onMouseLeave(product: Product): void {
    product.currentImage = product.imageUrl[0];
  } 
  toggleFilter() {
    this.isToggleOpen = !this.isToggleOpen;
  }
}
