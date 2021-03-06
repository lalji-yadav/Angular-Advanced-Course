import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondModuleComponent } from './second-module.component';

describe('SecondModuleComponent', () => {
  let component: SecondModuleComponent;
  let fixture: ComponentFixture<SecondModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
