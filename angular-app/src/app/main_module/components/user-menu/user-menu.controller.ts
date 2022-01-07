import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/services/authentication/authentication.service";

@Injectable()
export class UserMenuController {
    constructor(public authService: AuthenticationService, private router: Router) {
        this.authService.authInfos$.subscribe((status) => {

        })
    }

    public logout() {
        this.authService.logout();
    }
}