import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangingPhotoComponent } from './changing-photo.component';
import { NgImageSliderModule } from 'ng-image-slider'; 

@NgModule({
  declarations: [
    ChangingPhotoComponent
  ],
  imports: [
    CommonModule, NgImageSliderModule
  ],
  exports: [
    ChangingPhotoComponent
  ]
})
export class SliderPhotoModule { }