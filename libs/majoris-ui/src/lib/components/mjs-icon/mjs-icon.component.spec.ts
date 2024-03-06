import { ComponentFixture, TestBed } from '@angular/core/testing';
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
