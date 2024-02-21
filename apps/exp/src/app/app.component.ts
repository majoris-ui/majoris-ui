import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'exp-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  data = this.fb.group({
    title: '',
    checked: true,
    checked2: true,
  });

  constructor(private fb: FormBuilder) {}
}
