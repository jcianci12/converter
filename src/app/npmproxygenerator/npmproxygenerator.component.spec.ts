import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmproxygeneratorComponent } from './npmproxygenerator.component';

describe('NpmproxygeneratorComponent', () => {
  let component: NpmproxygeneratorComponent;
  let fixture: ComponentFixture<NpmproxygeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpmproxygeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmproxygeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
