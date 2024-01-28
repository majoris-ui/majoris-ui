import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  booleanAttribute,
} from '@angular/core';
import { ButtonLoadingTemplateDirective } from '../../directives/mjs-button-loading-template.directive';

export type Theme =
  | 'primary'
  | 'accent'
  | 'highlight'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'dark'
  | 'light';

export type Style = 'solid' | 'outline' | 'link';

export type Rounded = 'sm' | 'md' | 'lg' | 'full' | 'none';

export type Height = 'sm' | 'md' | 'lg';

export type BorderSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'mjs-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements AfterViewInit {
  @Input() color: Theme = 'primary';

  @Input() rounded: Rounded = 'sm';

  @Input() fill: Style = 'solid';

  @Input() size: Height = 'sm';

  loadingIcon: string = '';

  @Input({ transform: booleanAttribute })
  loading: boolean = false;

  @Input({ transform: booleanAttribute })
  expand: boolean = false;

  @Input({ transform: booleanAttribute })
  disabled: boolean = false;

  @Output() click: EventEmitter<null> = new EventEmitter();

  @ViewChild('button')
  button: ElementRef<HTMLButtonElement>;

  @ContentChild(ButtonLoadingTemplateDirective, { read: TemplateRef })
  loadingTemplate: TemplateRef<any>;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.renderer.setAttribute(
      this.button.nativeElement,
      'class',
      this.classes.join(' ')
    );
  }

  roundedClass(): string {
    return `border-rounded--${this.rounded}`;
  }

  disabledClass(): string {
    return this.disabled ? 'button--disabled' : '';
  }

  hoveredClass(): string {
    return !this.disabled && !this.loading
      ? `button--hovered button--hovered-${this.color}`
      : '';
  }

  styleClass(): string {
    return `button--${this.fill}-${this.color}`;
  }

  expandClass(): string {
    return this.expand ? `button--expanded` : 'button--collapsed';
  }

  heightClass(): string {
    return `button-size--${this.size}`;
  }

  loadingClass(): string {
    return `${this.loading ? 'button--loading' : ''}`;
  }

  get classes(): string[] {
    return [
      this.roundedClass(),
      this.disabledClass(),
      this.hoveredClass(),
      this.styleClass(),
      this.expandClass(),
      this.heightClass(),
    ];
  }

  onClick(): void {
    this.click.emit();
  }
}
