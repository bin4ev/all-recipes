import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

import { Observable } from "rxjs";
import { UserServiseService } from "src/app/user/user-servise.service";


@Injectable()
export class AuthActivate implements CanActivate {

    constructor(private router: Router, private userService: UserServiseService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | boolean | UrlTree {

        const { authRequared, authRedirectUrl } = route.data;
        
        if (typeof authRequared === 'boolean' && 
            authRequared === this.userService.isLogged){ 
                return true 
            }
            return this.router.parseUrl(authRedirectUrl || '/home')
    }






}