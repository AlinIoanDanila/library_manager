import { Button, Card, Typography } from "@mui/material";
import { Book } from "../../types";
import { deleteBook, updateBook } from "../../api/bookApi";
// import { red } from "@mui/material/colors";

const BookCard = (props: Book) => {
  const handleDelete = () => {
    deleteBook(props.id);
  };

  const handleEdit = () => {
    const newBook: Book = {
      id: Date.now(),
      author: "123",
      brief: "123",
      genre: "123",
      title: "123",
    };
    updateBook(props.id, newBook);
  };

  return (
    <Card className="book-card">
      <Typography gutterBottom variant="h5" component="div">
        {props.title}
      </Typography>
      <Typography variant="body2">{props.author}</Typography>
      <Typography variant="body2">{props.genre}</Typography>
      <Typography variant="body2">{props.brief}</Typography>
      <Button onClick={handleDelete}>Delete</Button>
      <Button onClick={handleEdit}>Edit</Button>
    </Card>
  );
};

export default BookCard;
