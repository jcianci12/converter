import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonToCSVComponent } from './csvtojson.component';

describe('CsvtojsonComponent', () => {
  let component: JsonToCSVComponent;
  let fixture: ComponentFixture<JsonToCSVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonToCSVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonToCSVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
