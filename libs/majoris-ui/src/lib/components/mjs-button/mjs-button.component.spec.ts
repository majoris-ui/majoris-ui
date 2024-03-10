import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MjsButtonComponent } from './mjs-button.component';

// updates

describe('ButtonComponent', () => {
  let component: MjsButtonComponent;
  let fixture: ComponentFixture<MjsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MjsButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MjsButtonComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
