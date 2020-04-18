import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgfileComponent } from './imgfile.component';

describe('ImgfileComponent', () => {
  let component: ImgfileComponent;
  let fixture: ComponentFixture<ImgfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
