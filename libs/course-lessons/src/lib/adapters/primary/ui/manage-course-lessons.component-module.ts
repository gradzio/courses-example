import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCourseLessonsComponent } from './manage-course-lessons.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [ManageCourseLessonsComponent],
  	providers: [],
  	exports: [ManageCourseLessonsComponent] })
export class ManageCourseLessonsComponentModule {
}
