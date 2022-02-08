import { CourseLessonDTO } from "./course-lesson.dto";

export interface CourseLessonsDTO {
  readonly id: string;
  readonly lessons: CourseLessonDTO[];
  readonly courseName: string;
}
