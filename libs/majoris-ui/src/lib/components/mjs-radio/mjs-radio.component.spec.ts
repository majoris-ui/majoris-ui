import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MjsRadioComponent } from './mjs-radio.component';

describe('MjsRadioComponent', () => {
  let component: MjsRadioComponent;
  let fixture: ComponentFixture<MjsRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MjsRadioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MjsRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
