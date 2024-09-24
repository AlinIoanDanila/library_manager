import { Dispatch, SetStateAction } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

import { useBooks } from "../../hooks";

export const DeleteBookForm = ({
  id,
  isFormOpen,
  setIsOpen,
}: {
  id: number;
  isFormOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { removeBook } = useBooks();

  const handleSubmit = () => {
    removeBook(id);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isFormOpen}>
      <DialogTitle>Are you sure you want to delete this book?</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" color="primary" variant="contained">
              Delete
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};
