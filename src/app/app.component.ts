import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import {NavbarComponent} from "./component/navbar/navbar.component";
import { RingsComponent } from './pages/rings/rings.component';
import { routes } from './app.routes';

@Component({
  schemas: [(CUSTOM_ELEMENTS_SCHEMA)],
  selector: 'app-root',
  standalone: true,
  providers: [],
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css'],
  imports: [
    RouterModule,
    NavbarComponent,
    RingsComponent
  ],
})

export class AppComponent  {
  constructor(){}
}

