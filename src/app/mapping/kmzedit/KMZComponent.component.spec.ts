import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KMZComponent } from './KMZComponent.component';

describe('HhszonesComponent', () => {
  let component: KMZComponent;
  let fixture: ComponentFixture<KMZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KMZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KMZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
