import { InjectionToken } from '@angular/core';
import { CategoriesDTO } from './categories.dto';

export const ADDS_CATEGORIES_DTO = new InjectionToken<AddsCategoriesDtoPort>('ADDS_CATEGORIES_DTO');

export interface AddsCategoriesDtoPort {
  add(categories: Partial<CategoriesDTO>): void;
}
