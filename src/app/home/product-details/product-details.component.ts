import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  sideBarVisibility: boolean = true;
  formGroup = new FormGroup({});
  productId: string;
  images = [
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria2s.jpg',
      alt: 'Description for Image 2',
      title: 'Title 2',
    },
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
      alt: 'Description for Image 3',
      title: 'Title 3',
    },
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria4s.jpg',
      alt: 'Description for Image 4',
      title: 'Title 4',
    },
  ];

  constructor(private activeRoute: ActivatedRoute) {
    this.productId = this.activeRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.images[0].itemImageSrc =
      'assets/' + 'shirt-' + this.productId + '.jpg';
  }
}
