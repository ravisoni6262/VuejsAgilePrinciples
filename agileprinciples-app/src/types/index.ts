export interface Principles {
  _id: string;
  pid: number;
  principle: string;
}

export interface RootObject {
  data: Principles[];
}
