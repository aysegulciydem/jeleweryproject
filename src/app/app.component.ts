import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {NavbarComponent} from "./component/navbar/navbar.component";
import { RingsComponent } from './pages/rings/rings.component';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';

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
    RingsComponent,
    CommonModule
  ],
})

export class AppComponent  {isHomePage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isHomePage = this.router.url === '/home'; // 'home' rotasında mı kontrol et
    });
  }
}

