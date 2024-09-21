import { StyledEngineProvider } from "@mui/material";
import BookForm from "./components/BookForm/BookForm";
import BookList from "./components/BookList/BookList";
import "./styles/normalize.css";
import "./styles/style.css";

// import BookForm from "./components/BookForm/BookForm";
// import BookCard from "./components/BookCard/BookCard";

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <BookForm />
      <BookList />
    </StyledEngineProvider>
  );
};

export default App;
