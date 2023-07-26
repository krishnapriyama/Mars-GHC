import { BrowserRouter, Route, Routes } from "react-router-dom";

//page
import Homepage from "./pages/homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
