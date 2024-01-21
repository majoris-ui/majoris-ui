import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
