import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ButtonComponent } from '@majoris-org/majoris-ui';
import { ButtonLoadingTemplateDirective } from 'libs/majoris-ui/src/lib/directives/mjs-button-loading-template.directive';
import { HomeComponent } from './home.component';

const home: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ButtonComponent,
    ButtonLoadingTemplateDirective,
    RouterModule.forChild(home),
  ],
})
export class HomeModule {}
