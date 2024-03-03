import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  booleanAttribute,
} from '@angular/core';
import {
  ButtonLoadingTemplateDirective,
  MjsContrastTextColorDirective,
} from '../../directives';

export type Theme =
  | 'default'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'light'
  | 'dark';

type Style = 'solid' | 'outline' | 'link';

type Rounded = 'sm' | 'md' | 'lg' | 'full' | 'none';

type Height = 'sm' | 'md' | 'lg';

type FontStyle = 'italic' | 'bold' | 'normal' | 'bold-italic';

type TextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'none';

@Component({
  selector: 'mjs-button',
  standalone: true,
  imports: [CommonModule, MjsContrastTextColorDirective],
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

  @Input() round: Rounded = 'md';

  @Input() fill: Style = 'solid';

  @Input() size: Height = 'md';

  @Input() fontStyle: FontStyle = 'normal';

  @Input() fontTransform: TextTransform = 'none';

  @Output() clickEvent: EventEmitter<any> = new EventEmitter();

  @ViewChild(ButtonLoadingTemplateDirective, { read: TemplateRef })
  loadingTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}

  get getThemeClass(): string {
    return `button-theme--${this.fill}--${this.theme}`;
  }

  get getRoundedClass(): string {
    return `button-rounded--${this.round}`;
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

  get getFontStyleClass(): string {
    let fontStyles: string[] = [];

    fontStyles = this.fontStyle.split('-').map((style) => {
      return `button-font-style--${style}`;
    });

    return fontStyles.join(' ');
  }

  get getTransformClass(): string {
    return `button-font-transform--${this.fontTransform}`;
  }

  get classes(): string[] {
    return [
      this.getRoundedClass,
      this.getDisabledClass,
      this.getExpandClass,
      this.getHeightClass,
      this.getThemeClass,
      this.getHoverClass,
      this.getFontStyleClass,
      this.getTransformClass,
    ];
  }

  onClick(): void {
    this.clickEvent.emit();
  }
}
