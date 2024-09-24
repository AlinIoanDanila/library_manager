import { useFormik } from "formik";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material";

import { useBooks } from "../../hooks";
import { Book, BookForm } from "../../types";

type IEditBookForm = {
  isFormOpen: boolean;
  bookInfo?: BookForm;
  id?: number;
  handleEdit?(id: number, book: Book): void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const EditBookForm: React.FC<IEditBookForm> = ({ isFormOpen, bookInfo, id, setIsOpen }: IEditBookForm) => {
  const { addNewBook, editBook } = useBooks();
  const [values, setValues] = useState<BookForm>(bookInfo || { author: "", brief: "", genre: "", title: "" });

  const formik = useFormik({
    onSubmit: () => {
      if (id) {
        editBook(id, values);
        setIsOpen(false);
        return;
      } else {
        addNewBook(values);
        setIsOpen(false);
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
