import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Products';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    _listFilterKeyword: string;
    get listFilterKeyword(): string {
        return this._listFilterKeyword;
    }
    set listFilterKeyword(value: string) {
        this._listFilterKeyword = value;
        this.filteredProducts = this.listFilterKeyword ? this.performFilter(this.listFilterKeyword) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[];
    errorMessage: any;

    constructor(private _productService: ProductService) {
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(listFilterKeyword: string): IProduct[] {
        listFilterKeyword = listFilterKeyword.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(listFilterKeyword) !== -1);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Products: ' + message;
    }
}
