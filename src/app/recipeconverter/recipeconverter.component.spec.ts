import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeconverterComponent } from './recipeconverter.component';

describe('RecipeconverterComponent', () => {
  let component: RecipeconverterComponent;
  let fixture: ComponentFixture<RecipeconverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeconverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
