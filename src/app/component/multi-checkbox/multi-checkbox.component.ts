import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {JsonPipe} from '@angular/common';
import { inject} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {Constant} from "../../constants/contants";
import { CommonModule } from '@angular/common';
@Component({
    schemas: [(CUSTOM_ELEMENTS_SCHEMA), NO_ERRORS_SCHEMA],
    selector: 'app-multi-checkbox',
    imports: [MatExpansionModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe, CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './multi-checkbox.component.html',
    styleUrl: './multi-checkbox.component.css'
})
export class MultiCheckboxComponent {
  readonly panelOpenState = signal(false);
  private readonly _formBuilder = inject(FormBuilder);

  readonly materialOptions = Constant.material;
  readonly colorOptions = Constant.color;
  readonly priceOptions = Constant.price;

  readonly materialGroup = this._formBuilder.group(
    Object.fromEntries(
      this.materialOptions.map(opt => [opt.key, [false]])
    )
  );
  readonly colorGroup = this._formBuilder.group(
    Object.fromEntries(
      this.colorOptions.map(opt => [opt.key, [false]])
    )
  );
  readonly priceGroup = this._formBuilder.group(
    Object.fromEntries(
      this.priceOptions.map(opt => [opt.key, [false]])
    )
  );
  

  
}
