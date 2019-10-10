import { ProductService } from "./products/product.service";
import { Component } from "@angular/core";

@Component({
  selector: "pm-root",
  templateUrl: "./app.component.html"
  // template: `
  //   <div>
  //     <nav class="navbar navbar-default">
  //       <div class="container-fluid">
  //         <a class="navbar-brand">{{ pageTitle }}</a>
  //         <ul class="nav navbar-nav">
  //           <li><a [routerLink]="['/welcome']">Home</a></li>
  //           <li><a [routerLink]="['/products']">Product List</a></li>
  //         </ul>
  //         <router-outlet></router-outlet>
  //       </div>
  //     </nav>
  //   </div>
  // `,
})
export class AppComponent {
  pageTitle: string = "Aamzon product Management";
}
