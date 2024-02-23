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
import {
  ControlValueAccessor,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MjsContrastTextColorDirective } from '../../directives';

type Height = 'sm' | 'md' | 'lg';

type Rounded = 'sm' | 'md' | 'lg' | 'full' | 'none';

@Component({
  selector: 'mjs-text-field',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MjsContrastTextColorDirective,
  ],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldComponent implements ControlValueAccessor {
  @Input({ transform: booleanAttribute }) required = false;

  @Input({ transform: booleanAttribute }) readonly = false;

  @Input({ transform: booleanAttribute }) disabled = false;

  @Input() label: string = '';

  @Input() rounded: Rounded = 'md';

  @Input() size: Height = 'md';

  @Input() placeholder: string = '';

  @Output() blur: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('field') field: ElementRef<HTMLDivElement>;

  @ViewChild('input') input: ElementRef<HTMLInputElement>;

  value: string = '';

  get roundedClass(): string {
    return `field-round--${this.rounded}`;
  }

  get getHeight(): string {
    return `field-height--${this.size}`;
  }

  get disabledStatusClass(): string {
    return this.disabled || this.readonly ? 'field--disabled' : '';
  }

  get isInvalidState(): boolean | null {
    return (
      this.ngControl &&
      this.ngControl.invalid &&
      this.ngControl.dirty &&
      !this.disabled &&
      !this.readonly
    );
  }

  get isValidState(): boolean | null {
    return (
      this.ngControl &&
      this.ngControl.valid &&
      this.ngControl.dirty &&
      !this.disabled &&
      !this.readonly
    );
  }

  get getInvalidStateClass(): string {
    return this.isInvalidState ? 'color-theme--invalid' : '';
  }

  get getValidStateClass(): string {
    return this.isValidState ? 'color-theme--valid' : '';
  }

  get classes(): string[] {
    return [
      'field',
      'color-theme',
      this.getHeight,
      this.roundedClass,
      this.disabledStatusClass,
      this.getInvalidStateClass,
      this.getValidStateClass,
    ];
  }

  constructor(@Optional() @Self() public ngControl: NgControl) {
    this.ngControl && (this.ngControl.valueAccessor = this);
  }

  getFieldTextColor(color: string): string {
    return `text-color--${color}`;
  }

  public onChangeFn = (_: any) => {};

  public onTouchedFn = () => {};

  writeValue(text: string): void {
    this.value = text;
  }

  public registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  public onChange() {
    this.onChangeFn(this.value);
  }

  public onBlur() {
    this.onTouchedFn();
    this.blur.emit();
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
