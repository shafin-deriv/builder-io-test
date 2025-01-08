import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuilderPage from "./builder-page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/builder-demo" element={<BuilderPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;