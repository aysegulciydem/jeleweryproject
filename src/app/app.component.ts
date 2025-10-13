import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {NavbarComponent} from "./component/navbar/navbar.component";
import { RingsComponent } from './pages/rings/rings.component';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './component/information/information.component';
import { AuthGuard } from './component/login/auth/auth.guard';
import { HttpClient } from '@angular/common/http';

@Component({
    schemas: [(CUSTOM_ELEMENTS_SCHEMA)],
    selector: 'app-root',
    providers: [],
    templateUrl: `./app.component.html`,
    styleUrls: ['./app.component.css'],
    imports: [
        RouterModule,
        NavbarComponent,
        CommonModule,
        InformationComponent,
        
        
    ]
})

export class AppComponent  {isHomePage: boolean = false;

  constructor() {}
}

