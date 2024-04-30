import { Component, OnInit } from '@angular/core';
import { ROUTER_TOKENS } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loaderVisible: boolean = true;
  contentVisible: boolean = false;
  menuVisible: boolean = false;
  selectedMenuItem: string = ''

  readonly ROUTER_TOKENS = ROUTER_TOKENS;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loaderVisible = false;
      this.menuVisible = true;
      this.contentVisible = true;
    }, 1000);
  }

  selectColor(menuItem: string): void {
    this.selectedMenuItem = menuItem;
  }

  removeSelected(): void {
    this.selectedMenuItem = '';
  }
}
