import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Optional,
  Self,
  booleanAttribute,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'mjs-field',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss',
})
export class FieldComponent implements ControlValueAccessor {
  @Input({ transform: booleanAttribute }) required = false;

  @Input({ transform: booleanAttribute }) readonly = false;

  @Input({ transform: booleanAttribute }) disabled = false;

  @Input() blur: EventEmitter<boolean> = new EventEmitter();

  text: string = '';

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
