/**
 * Created by o.chantereau on 01.03.2016.
 */
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

import {CrisisCenterComponent} from "./crisis-center/crisis-center.component";
import {DialogService} from "./dialog.service";
import {HeroComponent} from "./heroes/hero.component";

@Component({
    selector: 'my-app',
    template: `
    <h1>Component Router</h1>
    <alert dismissOnTimeout="3000">ng-bootstap is enanled</alert>
    <nav>
      <a [routerLink]="['CrisisCenter']">Crisis Center</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    providers:  [DialogService],
    directives: [Alert, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/crisis-center/...', name: 'CrisisCenter', component: CrisisCenterComponent, useAsDefault:true},
    {path:'/heroes/...',        name: 'Heroes',       component: HeroComponent}
])
export class AppComponent {

}
