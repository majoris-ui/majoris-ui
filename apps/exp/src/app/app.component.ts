import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'exp-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  data = this.fb.group({
    title: [''],
    checked: [{ value: true, disabled: false }],
    checked2: [{ value: false, disabled: false }],
  });

  lp: 'left' | 'right' = 'right';

  constructor(private fb: FormBuilder) {}

  a() {
    console.log('clicked');
  }

  changeLp() {
    this.lp = this.lp === 'left' ? 'right' : 'left';
  }
}
