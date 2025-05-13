export interface Task {
    name: string;
    completed: boolean;
    subtasks?: Task[];
}

export interface Subtask {
    name: string;
    completed: boolean;
  }