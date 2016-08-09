import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/components/app.component';
if (process.env.ENV === 'production') {
  enableProdMode();
}
bootstrap(AppComponent, []);
