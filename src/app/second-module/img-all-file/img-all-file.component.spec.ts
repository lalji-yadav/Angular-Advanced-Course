import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgAllFileComponent } from './img-all-file.component';

describe('ImgAllFileComponent', () => {
  let component: ImgAllFileComponent;
  let fixture: ComponentFixture<ImgAllFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgAllFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgAllFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
