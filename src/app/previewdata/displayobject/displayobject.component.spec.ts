import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayobjectComponent } from './displayobject.component';

describe('DisplayobjectComponent', () => {
  let component: DisplayobjectComponent;
  let fixture: ComponentFixture<DisplayobjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayobjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
