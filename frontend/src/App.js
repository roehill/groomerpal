import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Customers from "./customers/pages/Customers";
import NotFound from "./pages/NotFound";

const App = (props) => {
  return (
    <BrowserRouter>
      <Link to="/">Dashboard</Link>
      <Link to="customers">Customers</Link>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
