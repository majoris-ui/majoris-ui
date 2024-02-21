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

type Position = 'left' | 'right' | 'top' | 'bottom';

type Size = 'sm' | 'md' | 'lg';

type Round = 'sm' | 'md' | 'lg' | 'full' | 'none';

interface CheckboxEvent {
  checked: boolean;
}

@Component({
  selector: 'mjs-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IconComponent],
  templateUrl: './mjs-checkbox.component.html',
  styleUrl: './mjs-checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MjsCheckboxComponent implements ControlValueAccessor {
  @Input({ transform: booleanAttribute })
  required: boolean = false;

  @Input({ transform: booleanAttribute })
  disabled: boolean = false;

  @Input({ transform: booleanAttribute })
  readonly: boolean = false;

  @Input() id: string = '';

  @Input() label: string = '';

  @Input() name: string = '';

  @Input() checked: boolean = false;

  @Input() labelPosition: Position = 'left';

  @Input() size: Size = 'md';

  @Input() round: Round = 'md';

  @Output() blurEvent: EventEmitter<null> = new EventEmitter();

  @Output() clickEvent: EventEmitter<null> = new EventEmitter();

  @Output() changeEvent: EventEmitter<CheckboxEvent> = new EventEmitter();

  onChangeFn = (_: any) => {};

  onTouchedFn = () => {};

  constructor(@Optional() @Self() public ngControl: NgControl) {
    this.ngControl && (this.ngControl.valueAccessor = this);
  }

  get themeClass(): string {
    return `mjs-checkbox-theme`;
  }

  get getDisabledClass(): string {
    return this.disabled || this.readonly ? 'mjs-checkbox--disabled' : '';
  }

  get getRoundClass(): string {
    return `mjs-checkbox-round--${this.round}`;
  }

  get heightClass(): string {
    return `mjs-checkbox-height--${this.size}`;
  }

  get classes(): string[] {
    return [this.themeClass, this.heightClass, this.getDisabledClass];
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

  public onChangeEvent() {
    this.onChangeFn(this.checked);
    this.changeEvent.emit({
      checked: this.checked,
    });
  }

  public onBlur() {
    this.onTouchedFn();
    this.blurEvent.emit();
  }

  public onClickEvent() {
    if (!this.disabled && !this.readonly) {
      this.clickEvent.emit();
    }
  }
}
