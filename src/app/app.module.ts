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


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BrandsPageComponent,
    StoresPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SliderPhotoModule,FooterModule,HeaderModule,RouterOutlet,RouterLink,RouterLinkActive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
