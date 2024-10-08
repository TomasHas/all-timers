export class Task {
  private _id: number;
  private _text: string;
  private completed: boolean;

  //constructor es estado inicial
  constructor(text: string) {
    this._id = 0;
    this._text = text;
    this.completed = false;
  }

  public completeTask(): void {
    this.completed = true;
  }

  public getTaskInfo(): { id: number; text: string; completed: boolean } {
    return {
      id: this._id,
      text: this._text,
      completed: this.completed,
    };
  }

  set id(id: number) {
    this._id = id; //
  }
  get id() {
    return this._id;
  }
  set text(text: string) {
    this._text = text;
  }
  get text() {
    return this._text;
  }
}

export class TaskManager {
  private tasks: Task[] = [];

  static idCount = 0;

  public addTask(taskText: string): void {
    // Create a new instance to avoid modifying previous tasks

    const newTask = new Task(taskText);

    // Assign a unique ID to the new task
    newTask.id = ++TaskManager.idCount;

    // Push the new task into the tasks array
    this.tasks.push(newTask);

    console.log("Task added:", newTask);
    console.log("Current tasks in TaskManager:", this.tasks);
  }
  public getTasks(): Task[] {
    return [...this.tasks];
  }

  deleteTask(id: number) {
    this.tasks.map((t) => console.log(t.id, id));

    //matcht the id, find index and delete
  }
}
