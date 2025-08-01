/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { routes } from './app/app.config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import 'zone.js';




bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()), provideHttpClient(withFetch()),
    CommonModule, provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()
  ],
})
.catch(err => console.error(err));


  