import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { ImageCarouselComponent } from './image-carousel.component';



@NgModule({
  declarations: [
    ImageCarouselComponent
    
  ],
  imports: [
    CommonModule,MdbCarouselModule,
 
  ],
  exports: [
    ImageCarouselComponent
  ]
})
export class imageCarousel { }
