
import { Component } from '@angular/core';

@Component({
  selector: 'app-changing-photo',
  templateUrl: './changing-photo.component.html',
  styleUrl: './changing-photo.component.css'
})
export class ChangingPhotoComponent {
  imageObject = [
    {
      image:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
      title: 'Hummingbirds are amazing creatures',
    },
    {
      image:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
    },
    {
      image:
      '../../assets/photos/cysia1.jpg',
    thumbImage:
      '../../assets/photos/cysia1.jpg',
      title: 'Example with title.',
    },
    {
      image:
      '../../assets/photos/cysia2.jpg',
    thumbImage:
      '../../assets/photos/cysia2.jpg',
      title: 'Hummingbirds are amazing creatures',
    },
    {
      image:
      '../../assets/photos/cysia3.jpg',
    thumbImage:
      '../../assets/photos/cysia3.jpg',
      title: 'Hummingbirds are amazing creatures',
    },
    {
      image:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      title: 'Example two with title.',
    },
  ];
  constructor() { }


}