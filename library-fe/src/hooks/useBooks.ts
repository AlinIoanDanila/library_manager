import useSWR from "swr";

import { Book } from "../types";
import { getAllBooks } from "../api/bookApi";

const useBooks = () => {
  const { data, isLoading, error } = useSWR<Book[]>("/books", getAllBooks);

  return {
    books: data,
    isLoading,
    isError: error,
  };
};

export default useBooks;
