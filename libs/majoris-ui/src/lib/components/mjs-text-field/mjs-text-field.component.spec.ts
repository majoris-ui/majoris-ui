import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MjsTextFieldComponent } from './mjs-text-field.component';

describe('FieldComponent', () => {
  let component: MjsTextFieldComponent;
  let fixture: ComponentFixture<MjsTextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MjsTextFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MjsTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
