import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { CounterComponent } from './counter/counter.component';
import { SliderPhotoModule } from './changing-photo/slider-photo.module';

import { FooterModule } from './footer/footer.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SliderPhotoModule,FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
