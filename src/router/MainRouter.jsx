import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "../views/Landing";

export const RoutesMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};
