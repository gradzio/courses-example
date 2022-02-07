import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [StudentsListComponent],
  	providers: [],
  	exports: [StudentsListComponent] })
export class StudentsListComponentModule {
}
