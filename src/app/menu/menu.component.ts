import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public showMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

}
