interface BookListType {
  id: number;
  title: string;
  author: string;
}

export type BookType = BookListType[];
