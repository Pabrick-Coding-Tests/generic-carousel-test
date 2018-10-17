import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPhotoComponent } from './carousel-photo.component';

describe('CarouselPhotoComponent', () => {
  let component: CarouselPhotoComponent;
  let fixture: ComponentFixture<CarouselPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
