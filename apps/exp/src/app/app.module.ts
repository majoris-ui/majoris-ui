import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  MjsButtonComponent,
  MjsCheckboxComponent,
  MjsIconComponent,
  MjsTextFieldComponent,
} from '@majoris-org/majoris-ui';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MjsTextFieldComponent,
    MjsButtonComponent,
    MjsIconComponent,
    MjsCheckboxComponent,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
