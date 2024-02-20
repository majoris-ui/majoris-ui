import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MjsCheckboxComponent } from './mjs-checkbox.component';

describe('MjsCheckboxComponent', () => {
  let component: MjsCheckboxComponent;
  let fixture: ComponentFixture<MjsCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MjsCheckboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MjsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
