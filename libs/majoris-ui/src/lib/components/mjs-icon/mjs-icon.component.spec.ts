import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IconFontSet } from '../../interfaces/icon';
import { MjsIconComponent } from './mjs-icon.component';

describe('IconComponent', () => {
  let component: MjsIconComponent;
  let fixture: ComponentFixture<MjsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MjsIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MjsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should get font set class', () => {
    const fontSets: IconFontSet[] = ['sharp', 'outlined', 'round'];

    fontSets.forEach((fontSet) => {
      component.fontSet = fontSet;
      expect(component.getFontSetClass).toBe('material-icons-' + fontSet);
    });
  });

  it('should icon rendered not be empty', () => {
    fixture.componentRef.setInput('icon', 'home');

    fixture.detectChanges();

    const element = fixture.debugElement.query(
      By.css('.material-icons-' + component.fontSet)
    ).nativeElement;

    expect(element.textContent).toContain(component.icon);
  });

  it('should update the icon when the input changes', () => {
    fixture.componentRef.setInput('icon', 'home');
    fixture.detectChanges();

    let element = fixture.debugElement.query(
      By.css('.material-icons-' + component.fontSet)
    ).nativeElement;
    expect(element.textContent).toContain('home');

    fixture.componentRef.setInput('icon', 'settings');
    fixture.detectChanges();

    element = fixture.debugElement.query(
      By.css('.material-icons-' + component.fontSet)
    ).nativeElement;
    expect(element.textContent).toContain('settings');
  });
});
