import useSWR, { useSWRConfig } from "swr";

import { Book, BookForm } from "../types";
import { getAllBooks, deleteBook, updateBook, addBook } from "../api/bookApi";

export const useBooks = () => {
  const { data, isLoading, error } = useSWR<Book[]>("/books", getAllBooks);
  const { mutate } = useSWRConfig();

  const addNewBook = async (book: BookForm) => {
    try {
      await addBook(book);
      mutate("/books");
    } catch (error) {
      console.log(error);
    }
  };

  const removeBook = async (id: number) => {
    try {
      await deleteBook(id);
      mutate("/books");
    } catch (error) {
      console.log(error);
    }
  };

  const editBook = async (id: number, newBook: BookForm) => {
    try {
      const updatedBook = await updateBook(id, newBook);
      mutate("/books", (books: Book[] = []) => books.map((book) => (book.id === id ? updatedBook : book)), false);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    books: data,
    isLoading,
    isError: error,
    removeBook,
    editBook,
    addNewBook,
  };
};
