import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
  booleanAttribute,
} from '@angular/core';
import { getContrastingTextColor } from '../../helpers';

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

  @Input({ transform: booleanAttribute })
  disabled: boolean;

  @ViewChild('button')
  button: ElementRef<HTMLButtonElement>;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.getContractColor();

    this.renderer.setAttribute(
      this.button.nativeElement,
      'class',
      this.classes.join(' ')
    );
  }

  getContractColor(): void {
    const computedStyle = getComputedStyle(this.button.nativeElement);
    const backgroundColor = computedStyle.backgroundColor;

    this.fill === 'solid' &&
      (this.button.nativeElement.style.color =
        getContrastingTextColor(backgroundColor));
  }

  roundedClass(): string {
    return `border-rounded--${this.rounded}`;
  }

  disabledClass(): string {
    return this.disabled ? 'button--disabled' : '';
  }

  hoveredClass(): string {
    return this.disabled ? '' : 'button--hovered';
  }

  styleClass(): string {
    return `button--${this.fill}-${this.color}`;
  }

  get classes(): string[] {
    return [
      this.roundedClass(),
      this.disabledClass(),
      this.hoveredClass(),
      this.styleClass(),
    ];
  }
}
