export class Todo {
  name: string;
  isCompleted: boolean;
  constructor(todo: string, isCompleted: boolean) {
    this.name = todo;
    this.isCompleted = isCompleted;
  }
}
