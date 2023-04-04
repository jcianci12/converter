import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaykeyvalueComponent } from './displaykeyvalue.component';

describe('DisplaykeyvalueComponent', () => {
  let component: DisplaykeyvalueComponent;
  let fixture: ComponentFixture<DisplaykeyvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaykeyvalueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaykeyvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
