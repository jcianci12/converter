import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSVtoJSONComponent } from './csvto-json.component';

describe('CSVtoJSONComponent', () => {
  let component: CSVtoJSONComponent;
  let fixture: ComponentFixture<CSVtoJSONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSVtoJSONComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSVtoJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
