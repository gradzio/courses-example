import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesQuery } from './categories.query';

export const GETS_ALL_CATEGORIES_QUERY = new InjectionToken<GetsAllCategoriesQueryPort>('GETS_ALL_CATEGORIES_QUERY');

export interface GetsAllCategoriesQueryPort {
  getAllCategoriesQuery(): Observable<CategoriesQuery[]>;
}
