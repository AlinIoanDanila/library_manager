import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Card, CardActions, CardContent, Container, IconButton, Typography } from "@mui/material";

import { Book } from "../../types";
import { EditBookForm } from "../BookForm";
import { DeleteBookForm } from "../BookForm/DeleteBookForm";

export const BookCard: React.FC<Book> = (props: Book) => {
  const [isEditFormOpen, setIsEditFormOpen] = useState<boolean>(false);
  const [isDeleteFormOpen, setIsDeleteFormOpen] = useState<boolean>(false);

  const handleDelete = () => {
    setIsDeleteFormOpen(true);
  };

  const handleEdit = () => {
    setIsEditFormOpen(true);
  };

  return (
    <>
      <EditBookForm isFormOpen={isEditFormOpen} setIsOpen={setIsEditFormOpen} bookInfo={props} id={props.id} />
      <DeleteBookForm
        id={props.id}
        bookTitle={props.title}
        isFormOpen={isDeleteFormOpen}
        setIsOpen={setIsDeleteFormOpen}
      />

      <Card className="book-card">
        <CardContent className="book-card-container">
          <Container className="book-card-content">
            <Typography className="book-card-title" variant="h6" component="div">
              {props.title}
            </Typography>
            <Typography className="author-font" variant="body2">
              by {props.author}
            </Typography>
            <Typography className="genre-box" variant="body2">
              {props.genre}
            </Typography>
            <Typography className="brief-text" variant="body2">
              {props.brief}
            </Typography>
          </Container>
        </CardContent>

        <CardActions className="book-card-action-area">
          <IconButton onClick={() => handleEdit()}>
            <EditIcon></EditIcon>
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};
