import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

import { useBooks } from "../../hooks";
import { IDeleteBookForm } from "../../types";

export const DeleteBookForm: React.FC<IDeleteBookForm> = ({
  id,
  isFormOpen,
  setIsOpen,
  bookTitle,
}: IDeleteBookForm) => {
  const { removeBook } = useBooks();

  const handleSubmit = () => {
    removeBook(id);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isFormOpen}>
      <DialogTitle>Are you sure you want to delete "{bookTitle}"?</DialogTitle>
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
