import {
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
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
import {  Product} from "../../model/products";
import {Constant} from "../../constants/contants";
import {MatDialog} from "@angular/material/dialog";
import {FormGroupDirective,NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import{MatDrawer} from '@angular/material/sidenav';
import { ProductlistserviceService } from '../../services/productlistservice.service';
import { MultiCheckboxComponent } from '../../component/multi-checkbox/multi-checkbox.component';
import { NecklacesDetailDialogComponent } from './necklaces-detail-dialog/necklaces-detail-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
    schemas: [(CUSTOM_ELEMENTS_SCHEMA)],
    selector: 'app-necklaces',
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
    templateUrl: './necklaces.component.html',
    styleUrl: './necklaces.component.css'
})
export class NecklacesComponent {
protected readonly Constant = Constant;
  isToggleOpen: boolean = false;
  value: any;
  showFiller = false;
  noProducts: TemplateRef<NgIfContext<boolean>>;
  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);
  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);
  matcher = new MyErrorStateMatcher();
  necklaces: Product[] = [];
  products: any;
  constructor(
    private readonly matDialog: MatDialog,
    private readonly router: Router,
    private readonly productListservice: ProductlistserviceService,
    private snackBar: MatSnackBar,
  ){
    this.necklaces = []; // diziyi tanımla
    this.productListservice.getNecklaces().subscribe((data: Product[]) => {
    this.necklaces = data; // diziyi doldur
    this.necklaces.forEach((product: Product) => {
      product.currentImage = product.imageUrl[0];
    });
  });
}
ngOnInit(): void {}
  addToCard(product: Product): void {
    this.productListservice.addToBasket(product);
    this.snackBar.open('Product added to shopping list!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',          
      horizontalPosition: 'center',
      panelClass: ['custom-snackbar']
    });
  }

  openProductDetailDialogComponent(product: Product): void {
    this.matDialog.open(NecklacesDetailDialogComponent,
      {
        data: product,
        disableClose: true
      }
    );
  }

  @ViewChild('drawer') drawer!: MatDrawer;
  toggleFavorite(product: Product): void {
    console.log('Favoriye ekleniyor:', product);
    this.productListservice.addToFavorite(product);
    this.router.navigate(['favorite-page', 'favorite']);
  }
  toggleDrawer() {
    this.drawer.toggle();
  }

  onMouseEnter(product: Product): void {
    product.currentImage = product.imageUrl[1];
  }
  onMouseLeave(product: Product): void {
    // İlk resmi geri yükle
    product.currentImage = product.imageUrl[0];
  } 
  toggleFilter() {
    this.isToggleOpen = !this.isToggleOpen;
  }
}
