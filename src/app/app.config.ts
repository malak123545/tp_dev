import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export const appConfig = {
  providers: [
    provideRouter([]),
    importProvidersFrom(CommonModule, FormsModule)
  ]
};
