import { Component, OnInit, Input } from '@angular/core';
import { ITPhoto } from './carousel-photo.data';

@Component({
  selector: 'app-carousel-photo',
  templateUrl: './carousel-photo.component.html',
  styleUrls: ['./carousel-photo.component.sass']
})
export class CarouselPhotoComponent implements OnInit {

@Input() public data: ITPhoto;

  constructor() { }

  ngOnInit() {
  }

}
