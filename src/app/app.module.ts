import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CounterComponent } from './counter/counter.component';
import { SliderPhotoModule } from './changing-photo/slider-photo.module';

import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/headerToggle.module';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SliderPhotoModule,FooterModule,HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
