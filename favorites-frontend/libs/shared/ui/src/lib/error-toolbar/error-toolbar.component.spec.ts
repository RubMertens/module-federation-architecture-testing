import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorToolbarComponent } from './error-toolbar.component';

describe('ErrorToolbarComponent', () => {
  let component: ErrorToolbarComponent;
  let fixture: ComponentFixture<ErrorToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
