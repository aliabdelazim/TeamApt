import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { trigger, transition, useAnimation } from '@angular/animations';
import { scaleDownFromBottom } from 'ngx-router-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('scaleDownFromBottom', [
      transition('* => details', useAnimation(scaleDownFromBottom)),
    ]),
  ],
})
export class AppComponent {
  sideBarVisibility: boolean = true;

  items: MenuItem[];

  activeItem: MenuItem;

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' },
    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event) {
    this.activeItem = event;
  }

  activateLast() {
    this.activeItem = this.items[this.items.length - 1];
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
