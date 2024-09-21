import { Button } from "@mui/material";
import { useFormik } from "formik";

import { addBook } from "../../api/bookApi";
import { Book } from "../../types";

const BookForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      genre: "",
      brief: "",
    } as Book,
    onSubmit: (values) => {
      addBook(values);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">Author</label>
      <input id="author" name="author" type="text" onChange={formik.handleChange} value={formik.values.author} />
      <label htmlFor="firstName">Brief</label>
      <input id="brief" name="brief" type="text" onChange={formik.handleChange} value={formik.values.brief} />
      <label htmlFor="firstName">Genre</label>
      <input id="genre" name="genre" type="text" onChange={formik.handleChange} value={formik.values.genre} />
      <label htmlFor="firstName">Title</label>
      <input id="title" name="title" type="text" onChange={formik.handleChange} value={formik.values.title} />
      <Button type="submit">Save book</Button>
    </form>
  );
};

export default BookForm;
