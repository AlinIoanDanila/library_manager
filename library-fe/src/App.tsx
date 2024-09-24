import { StyledEngineProvider } from "@mui/material";

import { AppLayout } from "./components/AppLayout";

import "./styles/style.css";
import "./styles/normalize.css";

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <AppLayout />
    </StyledEngineProvider>
  );
};

export default App;
