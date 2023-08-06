import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './pages/product/product.component';
import { PriceComponent } from './components/price/price.component';
import { ToolBarComponent } from '../shared/components/tool-bar/tool-bar.component';
import { AlonePageComponent } from '../alone/pages/alone-page/alone-page.component';


@NgModule({
  declarations: [
    ProductComponent,
    PriceComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    // AlonePageComponent
  ]
})
export class ProductsModule { }
