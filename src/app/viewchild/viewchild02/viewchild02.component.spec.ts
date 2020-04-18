import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewchild02Component } from './viewchild02.component';

describe('Viewchild02Component', () => {
  let component: Viewchild02Component;
  let fixture: ComponentFixture<Viewchild02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewchild02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewchild02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
