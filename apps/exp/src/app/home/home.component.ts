import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'exp-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  a = '23';
}
