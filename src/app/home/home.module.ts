import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '@shared/shared.module';
import { CarouselModule } from 'primeng/carousel';

import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { GalleriaModule } from 'primeng/galleria';
import { TabViewModule } from 'primeng/tabview';
import { RatingModule } from 'primeng/rating';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [HomeComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    GalleriaModule,
    TabViewModule,
    RatingModule,
    ReactiveFormsModule,
    SidebarModule,
    DividerModule,
    ImageModule,
  ],
})
export class HomeModule {}
