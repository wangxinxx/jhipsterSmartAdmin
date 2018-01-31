import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, NavigationStart, NavigationEnd } from '@angular/router';

import { JhiLanguageHelper } from '../../shared';

@Component({
    selector: 'jhi-main',
    templateUrl: './main.component.html'
})
export class JhiMainComponent implements OnInit {
    private hideNavBar=false;

    constructor(
        private jhiLanguageHelper: JhiLanguageHelper,
        private router: Router
    ) {
        if( window.location.href.indexOf('smartadmin')>=0){
            this.hideNavBar=true
        }
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                if( window.location.href.indexOf('smartadmin')>=0){
                    this.hideNavBar=true
                }
            }
            if (event instanceof NavigationEnd) {
                this.jhiLanguageHelper.updateTitle(this.getPageTitle(this.router.routerState.snapshot.root));
            }
        });
    }

    private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
        let title: string = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'jhipsterSmartAdminApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }

    ngOnInit() {
        // this.router.events.subscribe((event) => {
        //     if (event instanceof NavigationEnd) {
        //         this.jhiLanguageHelper.updateTitle(this.getPageTitle(this.router.routerState.snapshot.root));
        //     }
        // });
    }
}
