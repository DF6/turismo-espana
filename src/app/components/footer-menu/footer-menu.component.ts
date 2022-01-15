import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss']
})
export class FooterMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setTransformDynamicWidths();
  }

  activeLink(targetedItem: HTMLElement): void {
    const menuItem = document.querySelectorAll('.menu-item');
    menuItem.forEach((item) => 
    item.classList.remove('active'));
    targetedItem.classList.add('active');
  }

  private setTransformDynamicWidths() {
    let items = document.getElementsByClassName('menu-item');
    for(let i = 0; i < items.length; i++) {
    }
  }

}
