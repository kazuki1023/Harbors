export type userTask = {
  task: string;
  picture: string;
  name: string;
  userid: number;
}

export type userTaskLGroup = {
  userid: number;
  picture: string;
  displayName: string;
  tasks: string[];
}
