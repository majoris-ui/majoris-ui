import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ButtonComponent } from '@majoris-org/majoris-ui';
import { HomeComponent } from './home.component';

const home: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ButtonComponent, RouterModule.forChild(home)],
})
export class HomeModule {}
