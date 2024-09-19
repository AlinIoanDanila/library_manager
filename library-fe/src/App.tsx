import { Button } from "@mui/material";
import axios from "axios";
import useSWR from "swr";

import "./styles/normalize.css";
import "./styles/style.css";

const fetcher = (url: string) => axios.get(url);

const App = () => {
  const { data: user } = useSWR("http://localhost:3000/", fetcher);

  return (
    <>
      <p>{user && <>{user.data.name}</>}</p>
      <p>Library Manager</p>
      <Button variant="text">Yo</Button>
    </>
  );
};

export default App;
