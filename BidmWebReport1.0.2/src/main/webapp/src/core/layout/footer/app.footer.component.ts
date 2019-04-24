import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class="layout-footer clearfix">
        	<!-- <a href="/">
        		<img alt="logo-colored" src="assets/layout/images/logo-blue.png" />
            </a> -->
            <span class="footer-text-right">
                <span>Copyright</span>
                <span class="material-icons">copyright</span>
                <span>2018 - {{this_year}}</span>
                <span>京东方科技集团股份有限公司</span>
            </span>
        </div>`
})
export class AppFooterComponent {
    readonly this_year;

    constructor() {
        this.this_year = new Date().getFullYear();
    }

}
