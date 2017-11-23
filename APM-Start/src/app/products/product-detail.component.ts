import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { IProduct } from './product';

@Component({
    selector: 'pm-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;

    constructor(private _activatedRoute: ActivatedRoute, private _router: Router) {
    }

    ngOnInit() {
        let productId = +this._activatedRoute.snapshot.paramMap.get('id');
        this.product = {
            'productId': productId,
            'productName': 'A great product',
            'productCode': 'string',
            'releaseDate': 'string',
            'price': 1,
            'description': 'string',
            'starRating': 4,
            'imageUrl': 'string',
        }
    }

    onBackButtonClicked(): void {
        this._router.navigate(['/product']);
    }
}
