import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsPageComponent } from './brands-page/brands-page.component';

const routes: Routes = [{path: 'brandsPage', component:BrandsPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
