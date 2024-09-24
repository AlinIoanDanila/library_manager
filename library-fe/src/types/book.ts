import { Dispatch, SetStateAction } from "react";

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  brief: string;
}

export interface BookForm {
  title: string;
  author: string;
  genre: string;
  brief: string;
}

export type IEditBookForm = {
  isFormOpen: boolean;
  bookInfo?: BookForm;
  id?: number;
  handleEdit?(id: number, book: Book): void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export type IDeleteBookForm = {
  id: number;
  isFormOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  bookTitle: string;
};
