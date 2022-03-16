import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.mock.service';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../models/menu.model';

@Component({
  selector: 'app-food-menu-item',
  templateUrl: './food-menu-item.component.html',
  styleUrls: ['./food-menu-item.component.scss']
})
export class FoodMenuItemComponent implements OnInit {
  menuItemId: number;
  menu: Menu[];
  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menuService.getMenu().subscribe((menu) => this.menu = menu);
    this.menuItemId = parseInt(this.route.snapshot.paramMap.get('menuItemId'), 10);
  }
}

