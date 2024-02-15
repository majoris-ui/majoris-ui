import { CommonModule } from '@angular/common';
import {
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

type Type = 'password' | 'text' | 'email' | 'number';

type Height = 'sm' | 'md' | 'lg';

type Rounded = 'sm' | 'md' | 'lg' | 'full' | 'none';

@Component({
  selector: 'mjs-text-field',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss',
})
export class TextFieldComponent implements ControlValueAccessor {
  @Input({ transform: booleanAttribute }) required = false;

  @Input({ transform: booleanAttribute }) readonly = false;

  @Input({ transform: booleanAttribute }) disabled = false;

  @Input() label: string = '';

  @Input() leftIcon: string = '';

  @Input() rightIcon: string = '';

  @Input() type: Type = 'text';

  @Input() rounded: Rounded = 'sm';

  @Input() size: Height = 'md';

  @Input() placeholder: string = '';

  @Output() blur: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('field') field: ElementRef<HTMLDivElement>;

  @ViewChild('leftIcon') leftIconRef: ElementRef<any>;

  @ViewChild('rightIcon') rightIconRef: ElementRef<any>;

  text: string = '';

  get roundedClass(): string {
    return `field-border-rounded--${this.rounded}`;
  }

  get getHeight(): string {
    return `field-height--${this.size}`;
  }

  get disabledStatusClass(): string {
    return this.disabled ? 'field--disabled' : '';
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

  get getInvalidIconStateClass(): string {
    return this.isInvalidState ? 'color-theme-icon--invalid' : '';
  }

  get getValidIconStateClass(): string {
    return this.isValidState ? 'color-theme-icon--valid' : '';
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
      this.getInvalidStateClass,
      this.getValidStateClass,
      this.disabledStatusClass,
    ];
  }

  constructor(@Optional() @Self() public ngControl: NgControl) {
    this.ngControl && (this.ngControl.valueAccessor = this);
  }

  public onChangeFn = (_: any) => {};

  public onTouchedFn = () => {};

  writeValue(text: string): void {
    this.text = text;
  }

  public registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  public onChange() {
    this.onChangeFn(this.text);
  }

  public onBlur() {
    this.onTouchedFn();
    this.blur.emit();
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}