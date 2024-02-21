import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Optional,
  Output,
  Self,
  booleanAttribute,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { IconComponent } from '../icon/icon.component';

type Theme = 'default' | 'success' | 'warning' | 'danger' | 'info';

type Position = 'left' | 'right' | 'top' | 'bottom';

type Size = 'sm' | 'md' | 'lg';

type Round = 'sm' | 'md' | 'lg' | 'full' | 'none';

@Component({
  selector: 'mjs-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IconComponent],
  templateUrl: './mjs-checkbox.component.html',
  styleUrl: './mjs-checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MjsCheckboxComponent implements ControlValueAccessor {
  @Input({ transform: booleanAttribute }) required: boolean = false;

  @Input() label: string = '';

  @Input() name: string = '';

  @Input() checked: boolean = false;

  @Input() disabled: boolean = false;

  @Input() labelPosition: Position = 'left';

  @Input() size: Size = 'md';

  @Input() round: Round = 'md';

  @Output() blur: EventEmitter<boolean> = new EventEmitter();

  onChangeFn = (_: any) => {};

  onTouchedFn = () => {};

  constructor(@Optional() @Self() public ngControl: NgControl) {
    this.ngControl && (this.ngControl.valueAccessor = this);
  }

  get themeClass(): string {
    return `mjs-checkbox-theme`;
  }

  get getRoundClass(): string {
    return `mjs-checkbox-round--${this.round}`;
  }

  get heightClass(): string {
    return `mjs-checkbox-height--${this.size}`;
  }

  get classes(): string[] {
    return [this.themeClass, this.heightClass];
  }

  writeValue(value: boolean): void {
    this.checked = value;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  public onChange() {
    this.onChangeFn(this.checked);
  }

  public onBlur() {
    this.onTouchedFn();
    this.blur.emit();
  }
}
