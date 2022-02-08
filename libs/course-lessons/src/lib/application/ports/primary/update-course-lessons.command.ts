export class UpdateCourseLessonsCommand {
  constructor(
    readonly courseId: string,
    readonly courseName: string,
    readonly lessons: string[]
  ) {}
}
