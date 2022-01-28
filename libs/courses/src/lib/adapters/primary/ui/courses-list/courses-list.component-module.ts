import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesListComponent } from './courses-list.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CoursesListComponent],
  providers: [],
  exports: [CoursesListComponent],
})
export class CoursesListComponentModule {}
