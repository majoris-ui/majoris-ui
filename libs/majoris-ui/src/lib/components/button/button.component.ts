import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
  booleanAttribute,
} from '@angular/core';
import { ButtonLoadingTemplateDirective } from '../../directives';

export type Theme = 'main' | 'success' | 'warning' | 'danger' | 'info';

export type Style = 'solid' | 'outline' | 'link';

export type Rounded = 'sm' | 'md' | 'lg' | 'full' | 'none';

export type Height = 'sm' | 'md' | 'lg';

export type BorderSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'mjs-button',
  standalone: true,
  imports: [CommonModule, ButtonLoadingTemplateDirective],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() theme: Theme = 'main';

  @Input() rounded: Rounded = 'sm';

  @Input() fill: Style = 'solid';

  @Input() size: Height = 'sm';

  @Input({ transform: booleanAttribute })
  loading: boolean = false;

  @Input({ transform: booleanAttribute })
  expand: boolean = false;

  @Input({ transform: booleanAttribute })
  disabled: boolean = false;

  @ViewChild('button')
  button: ElementRef<HTMLButtonElement>;

  @ViewChild(ButtonLoadingTemplateDirective, { read: TemplateRef })
  loadingTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}

  get getThemeClass(): string {
    return `button__theme--${this.theme}`;
  }

  get getStyleClass(): string {
    return `button__style--${this.fill}`;
  }

  get getRoundedClass(): string {
    return `border-rounded--${this.rounded}`;
  }

  get getDisabledClass(): string {
    return this.disabled ? 'button--disabled' : '';
  }

  get getExpandClass(): string {
    return this.expand ? `button--expanded` : 'button--collapsed';
  }

  get getHeightClass(): string {
    return `button-size--${this.size}`;
  }

  get getLoadingClass(): string {
    return `${this.loading ? 'button--loading' : ''}`;
  }

  get classes(): string[] {
    return [
      this.getThemeClass,
      this.getStyleClass,
      this.getRoundedClass,
      this.getDisabledClass,
      this.getExpandClass,
      this.getHeightClass,
      this.getLoadingClass,
    ];
  }
}
