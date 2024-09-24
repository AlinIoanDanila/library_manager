import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export const Header = () => {
  return (
    <AppBar className="navbar" position="sticky">
      <Toolbar className="toolbar">
        <Typography variant="h6">Library Manager</Typography>
        <Button variant="contained" color="inherit">
          Add Book
        </Button>
      </Toolbar>
    </AppBar>
  );
};
