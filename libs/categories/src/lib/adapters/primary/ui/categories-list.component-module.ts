import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './categories-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [CategoriesListComponent],
  	providers: [],
  	exports: [CategoriesListComponent] })
export class CategoriesListComponentModule {
}
