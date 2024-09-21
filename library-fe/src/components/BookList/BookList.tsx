import { Fragment } from "react/jsx-runtime";
import useBooks from "../../hooks/useBooks";
import { Book } from "../../types";
import BookCard from "../BookCard/BookCard";

const BookList = () => {
  const { books, isError, isLoading } = useBooks();

  if (isError || books?.length === 0) return <div>Books not found</div>;

  return (
    <>
      {isLoading ? (
        <div>Books loading</div>
      ) : (
        <div>
          {books?.map((book: Book) => (
            <Fragment key={book.id}>
              <BookCard {...book} />
            </Fragment>
          ))}
        </div>
      )}
    </>
  );
};

export default BookList;
