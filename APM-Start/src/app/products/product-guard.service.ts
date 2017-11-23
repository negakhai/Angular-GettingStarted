import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {
    constructor(private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let productId = +route.url[1].path;
        if (isNaN(productId) || productId < 1) {
            alert('Invalid product');
            this._router.navigate(['/product']);
            return false;
        }
        return true;
    }
}
