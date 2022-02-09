import { InjectionToken } from '@angular/core';
import { LoadAllCategoriesCommand } from './load-all-categories.command';

export const LOAD_ALL_CATEGORIES_COMMAND = new InjectionToken<LoadAllCategoriesCommandPort>('LOAD_ALL_CATEGORIES_COMMAND');

export interface LoadAllCategoriesCommandPort {
  loadAllCategories(command: LoadAllCategoriesCommand): void;
}
