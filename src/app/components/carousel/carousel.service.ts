import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITPhoto } from '../carousel-photo/carousel-photo.data';

@Injectable({
    providedIn: 'root'
  })
  export class CarouselService {

    public photos: Array<ITPhoto>;
    public limit: number;

    constructor (private http: HttpClient) {
        this.limit = 12;
        this.photos = [];

        this.getData().subscribe(
            (data: any) => {
                this.photos = data.hits.slice(0, this.limit);
            }
        );

    }

    public getData(): Observable<any> {
        // tslint:disable-next-line:max-line-length
        return this.http.get<any>(`https://pixabay.com/api/?key=10414638-770fbbcb333ae8555f5bd47b6&q=yellow+flowers&image_type=photo&pretty=true`);
    }

}
