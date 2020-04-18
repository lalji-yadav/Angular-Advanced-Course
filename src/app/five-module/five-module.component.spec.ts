import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveModuleComponent } from './five-module.component';

describe('FiveModuleComponent', () => {
  let component: FiveModuleComponent;
  let fixture: ComponentFixture<FiveModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
