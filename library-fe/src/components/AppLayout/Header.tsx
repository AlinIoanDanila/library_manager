import { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

import { EditBookForm } from "../BookForm";

export const Header = () => {
  const [isAddingMenuOpen, setIsAddingMenuOpen] = useState<boolean>(false);

  const handleAddBook = () => {
    setIsAddingMenuOpen(true);
  };

  return (
    <AppBar className="navbar" position="sticky">
      <EditBookForm isFormOpen={isAddingMenuOpen} setIsOpen={setIsAddingMenuOpen} />
      <Toolbar className="toolbar">
        <Typography variant="h6">Library Manager</Typography>
        <Button onClick={handleAddBook} variant="contained" color="inherit">
          Add Book
        </Button>
      </Toolbar>
    </AppBar>
  );
};
