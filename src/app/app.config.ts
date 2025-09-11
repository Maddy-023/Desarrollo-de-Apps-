import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ComponenteUnoComponent } from './componente-uno/componente-uno.component';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [ provideHttpClient(),  provideRouter(routes)]
};
