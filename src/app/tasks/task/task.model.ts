export interface Task {
  title: string;
  id: string;
  userId: string;
  summary: string;
  dueDate: string;
}

export interface NewTask {
  title: string;
  summary: string;
  dueDate: string;
}
