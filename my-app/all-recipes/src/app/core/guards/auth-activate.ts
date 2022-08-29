import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserServiseService } from "src/app/core/services/user-servise.service";


@Injectable()
export class AuthActivate implements CanActivate {

    constructor(private router: Router, private userService: UserServiseService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,): boolean | UrlTree | Observable<boolean | UrlTree> | boolean | UrlTree {

        const { authRequared, authRedirectUrl } = route.data;

        if (authRequared) {
            return this.userService.isLoggedIn
        } else {
            return this.userService.isLoggedIn.pipe(map(res => res ? false : true))
        }


    }
}