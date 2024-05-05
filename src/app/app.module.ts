import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CounterComponent } from './counter/counter.component';
import { SliderPhotoModule } from './changing-photo/slider-photo.module';

import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/headerToggle.module';
import { BrandsPageComponent } from './brands-page/brands-page.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StoresPageComponent } from './stores-page/stores-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { imageCarousel } from './image-carousel/image-carousel.module';
import { OfferComponentComponent } from './offer-component/offer-component.component';
import { ServicesComponentComponent } from './services-component/services-component.component';



@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BrandsPageComponent,
    StoresPageComponent,
    AboutUsPageComponent,
    OfferComponentComponent,
    ServicesComponentComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SliderPhotoModule,FooterModule,HeaderModule,RouterOutlet,RouterLink,RouterLinkActive,imageCarousel,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
