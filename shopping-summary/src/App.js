import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Main from "./components/Main";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Fragment>
  );
}

export default App;
