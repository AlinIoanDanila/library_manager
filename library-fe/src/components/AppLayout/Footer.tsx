import { Typography } from "@mui/material";

export const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <Typography variant="caption">© {getCurrentYear()} Personal Library Manager</Typography>
    </footer>
  );
};
