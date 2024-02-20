import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

type Theme = 'default' | 'success' | 'warning' | 'danger' | 'info';

type Position = 'left' | 'right' | 'top' | 'bottom';

type Size = 'sm' | 'md' | 'lg';

@Component({
  selector: 'mjs-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './mjs-checkbox.component.html',
  styleUrl: './mjs-checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MjsCheckboxComponent implements ControlValueAccessor {
  /**
   * Label for the checkbox
   */
  @Input() label: string = '';

  @Input() name: string = '';

  @Input() id: string = '';

  @Input() checked: boolean = false;

  @Input() disabled: boolean = false;

  @Input() required: boolean = false;

  @Input() theme: Theme = 'default';

  @Input() labelPosition: Position = 'left';

  @Input() size: Size = 'md';

  constructor() {}

  writeValue(value: boolean): void {
    this.checked = value;
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
