import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {NavbarComponent} from "./component/navbar/navbar.component";
import { RingsComponent } from './pages/rings/rings.component';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './component/information/information.component';

@Component({
    schemas: [(CUSTOM_ELEMENTS_SCHEMA)],
    selector: 'app-root',
    providers: [],
    templateUrl: `./app.component.html`,
    styleUrls: ['./app.component.css'],
    imports: [
        RouterModule,
        NavbarComponent,
        RingsComponent,
        CommonModule,
        InformationComponent
    ]
})

export class AppComponent  {isHomePage: boolean = false;

  constructor() {}
}

