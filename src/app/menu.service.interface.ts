import {Observable} from 'rxjs';
import {Menu} from './models/menu.model';

export interface IMenuService {
  getMenu(): Observable<Menu[]>;
}
