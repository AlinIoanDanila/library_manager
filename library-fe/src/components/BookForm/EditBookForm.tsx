import { useFormik } from "formik";
import { ChangeEvent, useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material";

import { useBooks } from "../../hooks";
import { BookForm, IEditBookForm } from "../../types";

const DEFAULT_VALUES: BookForm = { author: "", brief: "", genre: "", title: "" };

/**
 * Component to both add and edit a book
 * If bookID is provided, the request will edit the book with the specified ID, else it will create a new book
 */
export const EditBookForm: React.FC<IEditBookForm> = ({ isFormOpen, bookInfo, id, setIsOpen }: IEditBookForm) => {
  const { addNewBook, editBook } = useBooks();
  const [values, setValues] = useState<BookForm>(bookInfo || DEFAULT_VALUES);

  //Reset form to initial values
  const reset = () => {
    setValues(DEFAULT_VALUES);
    setIsOpen(false);
  };

  const formik = useFormik({
    onSubmit: () => {
      if (id) {
        editBook(id, values);
        reset();
        return;
      } else {
        addNewBook(values);
        reset();
        return;
      }
    },
    initialValues: values as BookForm,
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((oldItem: BookForm) => ({ ...oldItem, [e.target.name]: e.target.value }));
  };

  return (
    <Dialog open={isFormOpen} onClose={handleClose}>
      <DialogTitle>Add a New Book</DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Title"
            name="title"
            value={values.title}
            onChange={(e) => handleChange(e)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Author"
            name="author"
            value={values.author}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Genre"
            name="genre"
            value={values.genre}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Brief"
            name="brief"
            value={values.brief}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" color="primary" variant="contained">
              Save
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};
