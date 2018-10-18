import { Component, OnInit } from '@angular/core';
import { CarouselService } from './carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {

  public carouselPosition: string;
  private index: number;
  private photo: {
    width: number;
    padding: number;
  };
  constructor(private service: CarouselService) { }

  ngOnInit() {
    this.photo = {
      width: 380,
      padding: 10
    };
    this.index = 0;
    this.carouselPosition = this.getCarouselPositionFrom(this.index);
  }

  public prevPhoto() {
    this.index = (this.index - 1) < 0 ? this.service.photos.length - 1 : this.index - 1;
    this.carouselPosition = this.getCarouselPositionFrom(this.index);
  }

  public nextPhoto() {
    this.index = (this.index + 1) >= this.service.limit ? 0 : (this.index + 1);
    this.carouselPosition = this.getCarouselPositionFrom(this.index);
  }

  private getCarouselPositionFrom(index: number): string {
    // return this.carouselPosition = `${((index * -this.photo.width) - this.photo.padding)}px`;
    return this.carouselPosition = `${(index * -this.photo.width - this.photo.padding)}px`;
  }

}
