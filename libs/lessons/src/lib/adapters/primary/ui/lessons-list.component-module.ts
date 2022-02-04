import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsListComponent } from './lessons-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [LessonsListComponent],
  	providers: [],
  	exports: [LessonsListComponent] })
export class LessonsListComponentModule {
}
