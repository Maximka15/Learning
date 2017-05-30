import { Component } from '@angular/core';

@Component({
    selector: "footer-component",
    templateUrl: "./footer.component.html"
})

export class FooterComponent {
    ngOnInit () {
        console.log("Footer component Init");
    }
}