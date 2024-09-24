import { Grid2 } from "@mui/material";

import { Book } from "../../types";
import { BookCard } from "../BookCard";
import { useBooks } from "../../hooks/";

export const BookList = () => {
  const { books, isError, isLoading } = useBooks();

  if (isError || books?.length === 0) return <div>Books not found</div>;

  return (
    <>
      {isLoading ? (
        <div>Books loading</div>
      ) : (
        <Grid2 className="book-list" spacing={3} container>
          {books?.map((book: Book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </Grid2>
      )}
    </>
  );
};

export default BookList;
