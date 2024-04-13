import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CounterComponent } from './counter/counter.component';
import { SliderPhotoModule } from './changing-photo/slider-photo.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SliderPhotoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
