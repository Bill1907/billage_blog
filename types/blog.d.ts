export type Blog = {
  _id?: string;
  title: string;
  tags: string[];
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
};
