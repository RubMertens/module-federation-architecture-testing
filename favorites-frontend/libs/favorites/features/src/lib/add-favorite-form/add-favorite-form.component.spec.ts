import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddFavoriteFormComponent } from './add-favorite-form.component';

describe('AddFavoriteFormComponent', () => {
  let component: AddFavoriteFormComponent;
  let fixture: ComponentFixture<AddFavoriteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFavoriteFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddFavoriteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
