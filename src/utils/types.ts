export type ClassTodayProps = {
  title: string;
  time: string | number;
}[];

export type CustomerType = {
  name: string;
  city: string;
  state: string;
  photoUrl?: string;
  currentAmount?: number;
};

export type Classes = {
  id: string;
  title: string;
  date: number | string;
  views: number;
  category: string;
};
