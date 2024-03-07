import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Optional,
  Output,
  Self,
  ViewChild,
  booleanAttribute,
} from '@angular/core';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { MjsIconComponent } from '../mjs-icon/mjs-icon.component';

type Position = 'left' | 'right';

type Size = 'sm' | 'md' | 'lg';

type Round = 'sm' | 'md' | 'lg' | 'full' | 'none';

interface CheckboxEvent {
  checked: boolean;
}

@Component({
  selector: 'mjs-radio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MjsIconComponent],
  templateUrl: './mjs-radio.component.html',
  styleUrl: './mjs-radio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MjsRadioComponent {
  @Input({ transform: booleanAttribute })
  required: boolean = false;

  @Input({ transform: booleanAttribute })
  disabled: boolean = false;

  @Input({ transform: booleanAttribute })
  readonly: boolean = false;

  @Input({ required: true }) id: string = '';

  @Input() label: string = '';

  @Input() name: string = '';

  @Input() checked: boolean = false;

  @Input() placement: Position = 'right';

  @Input() size: Size = 'md';

  @Input() round: Round = 'md';

  @Output() blurEvent: EventEmitter<null> = new EventEmitter();

  @Output() clickEvent: EventEmitter<null> = new EventEmitter();

  @Output() changeEvent: EventEmitter<CheckboxEvent> = new EventEmitter();

  @ViewChild('checkbox') checkboxRef: ElementRef<HTMLLabelElement>;

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

  get labelPositionClass(): string {
    return `mjs-checkbox-label-position--${this.placement}`;
  }

  get classes(): string[] {
    return [
      this.themeClass,
      this.heightClass,
      this.getDisabledClass,
      this.labelPositionClass,
    ];
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
