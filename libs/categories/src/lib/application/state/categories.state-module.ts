import { NgModule } from '@angular/core';
import { CategoriesState } from './categories.state';
import { ADD_CATEGORY_COMMAND } from '../ports/primary/add-category-command.port';
import { GETS_ALL_CATEGORIES_QUERY } from '../ports/primary/gets-all-categories-query.port';
import { LOAD_ALL_CATEGORIES_COMMAND } from '../ports/primary/load-all-categories-command.port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [CategoriesState, { provide: ADD_CATEGORY_COMMAND, useExisting: CategoriesState }, { provide: GETS_ALL_CATEGORIES_QUERY, useExisting: CategoriesState }, { provide: LOAD_ALL_CATEGORIES_COMMAND, useExisting: CategoriesState }],
  	exports: [] })
export class CategoriesStateModule {
}
