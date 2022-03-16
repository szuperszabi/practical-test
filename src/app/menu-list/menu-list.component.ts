import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.mock.service';
import { Router } from '@angular/router';
import { Menu } from '../models/menu.model';


@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  menu: Menu[];
  constructor(
    private menuService: MenuService,
    private router: Router
  ) { }

  ngOnInit() {
    this.menuService.getMenu().subscribe((menu) => this.menu = menu);
  }

  navigateToDetails(itemId) {
    this.router.navigate(['menu-item-details', itemId]);

  }
}
