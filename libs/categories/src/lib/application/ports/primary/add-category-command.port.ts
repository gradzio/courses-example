import { InjectionToken } from '@angular/core';
import { AddCategoryCommand } from './add-category.command';

export const ADD_CATEGORY_COMMAND = new InjectionToken<AddCategoryCommandPort>('ADD_CATEGORY_COMMAND');

export interface AddCategoryCommandPort {
  addCategory(command: AddCategoryCommand): void;
}
