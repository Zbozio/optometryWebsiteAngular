import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    MdbRippleModule,
    MdbFormsModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
