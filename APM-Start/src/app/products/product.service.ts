import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IProduct } from './product';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class ProductService {
    private _productUrl: string = '../../api/products/products.json';

    constructor(private _httpClient: HttpClient) { }

    getProducts(): Observable<IProduct[]> {
        return this._httpClient.get<IProduct[]>(this._productUrl)
            .do(data => console.log('RAW PRODUCTS DATA: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: HttpErrorResponse) {
        console.log(error.message);
        return Observable.throw(error.message);
    }
}
