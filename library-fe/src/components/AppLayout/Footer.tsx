import { Typography } from "@mui/material";

import { getCurrentYear } from "../../utils";

export const Footer = () => {
  return (
    <footer>
      <Typography variant="caption">© {getCurrentYear()} Personal Library Manager</Typography>
    </footer>
  );
};
