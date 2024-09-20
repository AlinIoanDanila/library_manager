import useSWR from "swr";

import { Book } from "../types";
import { getAllBooks } from "../api/bookApi";

const useBooks = () => {
  const { data, error } = useSWR<Book[]>("/books", getAllBooks);

  return {
    data,
    error,
  };
};

export default useBooks;
