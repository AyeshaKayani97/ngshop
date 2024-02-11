import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { productsRoutes } from './products.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(productsRoutes)],
};
