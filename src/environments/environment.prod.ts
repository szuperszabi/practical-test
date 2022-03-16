import {MenuService as MockMenuService} from '../app/menu.mock.service';
import {MenuService} from '../app/menu.service';

export const environment = {
  production: true,
  providers: [//{provide: MockMenuService, useClass: MenuService}  //add this line for production
  ]
};
