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

export type Theme = 'default' | 'success' | 'warning' | 'danger' | 'info';

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
  @Input({ transform: booleanAttribute })
  loading: boolean = false;

  @Input({ transform: booleanAttribute })
  expanded: boolean = false;

  @Input({ transform: booleanAttribute })
  disabled: boolean = false;

  @Input() theme: Theme = 'default';

  @Input() rounded: Rounded = 'md';

  @Input() fill: Style = 'solid';

  @Input() size: Height = 'md';

  @ViewChild('button')
  button: ElementRef<HTMLButtonElement>;

  @ViewChild(ButtonLoadingTemplateDirective, { read: TemplateRef })
  loadingTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}

  get getThemeClass(): string {
    return `button-theme--${this.fill}--${this.theme}`;
  }

  get getRoundedClass(): string {
    return `button-rounded--${this.rounded}`;
  }

  get getDisabledClass(): string {
    return this.disabled ? 'button--disabled' : '';
  }

  get getExpandClass(): string {
    return this.expanded ? `button--expanded` : 'button--collapsed';
  }

  get getHeightClass(): string {
    return `button-size--${this.size}`;
  }

  get getLoadingClass(): string {
    return `${!this.disabled && this.loading ? 'button--loading' : ''}`;
  }

  get getHoverClass(): string {
    return `${!this.disabled ? `button-theme-hover--${this.fill}` : ''}`;
  }

  get classes(): string[] {
    return [
      this.getRoundedClass,
      this.getDisabledClass,
      this.getExpandClass,
      this.getHeightClass,
      this.getThemeClass,
      this.getHoverClass,
    ];
  }
}
