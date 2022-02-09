import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesDTO } from './categories.dto';

export const GETS_ALL_CATEGORIES_DTO = new InjectionToken<GetsAllCategoriesDtoPort>('GETS_ALL_CATEGORIES_DTO');

export interface GetsAllCategoriesDtoPort {
  getAll(criterion?: Partial<CategoriesDTO>): Observable<CategoriesDTO[]>;
}
