import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, CardModule, ButtonModule],
  exports: [ProductCardComponent],
})
export class SharedModule {}
