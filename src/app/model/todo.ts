export class Todo {
  completed: boolean;
  editing: boolean;

  private _title: string;
  get title() {
    return this._title;
  }
  set title(value: string) {
    this._title = value.trim();
  }

  constructor(data?: any) {
    if (data) {
      this.title = data.title;
      this.completed = data.completed;
      this.editing = data.editing;
    }
  }

  serialize(): any {
    return {
      title: this.title,
      completed: !!this.completed,
      editing: !!this.editing
    };
  }
}
