
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
      'https://s.yimg.com/ny/api/res/1.2/WDSqWZUb4I4lgkClpGz_UA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY4MztoPTYwMg--/https://media.zenfs.com/en-US/homerun/hello_giggles_454/0c7f747bd97a5a69b9474e787a58f4e9',
    thumbImage:
      'https://s.yimg.com/ny/api/res/1.2/WDSqWZUb4I4lgkClpGz_UA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY4MztoPTYwMg--/https://media.zenfs.com/en-US/homerun/hello_giggles_454/0c7f747bd97a5a69b9474e787a58f4e9',
      title: 'Hummingbirds are amazing creatures',
    },
    {
      image:
      'https://files.selecthealth.cloud/api/public/content/227173-Lady-wearing-glasses_blog_lg.jpg',
    thumbImage:
      'https://files.selecthealth.cloud/api/public/content/227173-Lady-wearing-glasses_blog_lg.jpg',
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