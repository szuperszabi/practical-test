import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Menu } from './models/menu.model';
import { IMenuService } from './menu.service.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements IMenuService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getMenu() {
    return this.httpClient.get('/api/menu') as Observable<Menu[]>;
  }
}
