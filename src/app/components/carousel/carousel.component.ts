import { Component, OnInit } from '@angular/core';
import { CarouselService } from './carousel.service';
import { ITPhoto } from '../carousel-photo/carousel-photo.data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {

  public currentPhoto: ITPhoto;
  private index: number;
  constructor(private service: CarouselService) { }

  ngOnInit() {
    this.index = 0;
    this.service.getData().subscribe(
      () => {
        this.currentPhoto = this.service.photos[this.index];
      }
    );
  }

  public nextPhoto() {
    this.index = (this.index + 1) >= this.service.limit ? 0 : (this.index + 1);
    this.currentPhoto = this.service.photos[this.index];
  }

  public prevPhoto() {
    this.index = (this.index - 1) < 0 ? this.service.photos.length - 1 : this.index - 1;
    this.currentPhoto = this.service.photos[this.index];
  }

}
