import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Menu } from './models/menu.model';
import { IMenuService } from './menu.service.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements IMenuService {

  constructor() { }
  getMenu(): Observable<Menu[]> {
    return of([
          {
            "id": 1,
            "name": "Pizza",
            "has_crust":true,
            "list": [
              {
                "id": 1,
                "name": "Qatro Stagione",
                "crust": ["crispy", "fluffy"],
                "topping": ["Mozzarella", "Corn", "Bacon"],
                "topping_price": 1.3,
                "img_url": "./assets/images/Quatro_Stagioni.jpg",
                "ingredients": ["Ham", "Mozzarella", "Bacon"],
                "price": 8
              },
              {
                "id": 2,
                "name": "Pizza Benny",
                "crust": ["crispy", "fluffy"],
                "topping": ["Mozzarella", "corn"],
                "topping_price": 1.1,
                "img_url": "./assets/images/Pizza_Beny.jpg",
                "ingredients": ["Ham", "Mozzarella", "Sour cream", "Bacon"],
                "price": 9.9
              },
              {
                "id": 3,
                "name": "Pizza Polo",
                "crust": ["crispy", "fluffy"],
                "topping": ["Mozzarella", "corn","Mushroom"],
                "topping_price": 0.8,
                "img_url": "./assets/images/Pizza_Pollo.jpg",
                "ingredients": ["Ham", "Mozzarella"],
                "price": 7.5
              }
           ],

          },
          {
            "id": 2,
            "name": "Pasta",
            "has_crust":false,
            "list": [
              {
                "id": 4,
                "name": "Carbonara",
                "crust": ["crispy", "fluffy"],
                "topping": ["Mozzarella", "corn"],
                "topping_price": 1.4,
                "img_url": "./assets/images/paste-carbonara.jpg",
                "ingredients": ["Eggs", "Sour cream", "Bacon"],
                "price": 9
              },
              {
                "id": 5,
                "name": "Milanese",
                "crust": ["crispy", "fluffy"],
                "topping": ["Mozzarella", "Corn"],
                "topping_price": 1.8,
                "img_url": "./assets/images/paste-milanese.jpg",
                "ingredients": ["Ground beef", "Tomato", "Mushrooms"],
                "price": 8.6
              }
            ],

          }

    ]);
  }
}
