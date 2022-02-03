import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLessonFormComponent } from './add-lesson-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [AddLessonFormComponent],
  	providers: [],
  	exports: [AddLessonFormComponent] })
export class AddLessonFormComponentModule {
}
