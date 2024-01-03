interface CheckList {
  id: number;
  name: string;
  checked: boolean;
  color: string;
}
export const checkList: CheckList[] = [
  {
    id: 1,
    name: 'test',
    checked: false,
    color: 'blue',
  },
  {
    id: 2,
    name: 'test2',
    checked: false,
    color: 'red',
  },
  {
    id: 3,
    name: 'test3',
    checked: false,
    color: 'yellow',
  },
]
