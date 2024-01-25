import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
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

export type Rounded = 'sm' | 'md' | 'lg' | 'full' | 'none';

@Component({
  selector: 'mjs-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements AfterViewChecked {
  @Input() color: Theme = 'primary';

  @Input() rounded: Rounded = 'sm';

  @ViewChild('button') button: ElementRef<HTMLButtonElement>;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    this.getContractColor();

    this.renderer.setAttribute(
      this.button.nativeElement,
      'class',
      this.classes.join(' ')
    );
  }

  getContractColor(): void {
    this.button.nativeElement.style.color = getContrastingTextColor(
      this.button
    );
  }

  colorClasses(): string {
    return this.color;
  }

  roundedClasses(): string {
    return this.rounded;
  }

  get classes(): string[] {
    return ['border-rounded-' + this.roundedClasses(), this.colorClasses()];
  }
}
