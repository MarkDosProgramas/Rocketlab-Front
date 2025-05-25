import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Produto from "./pages/Produto";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Payment from "./pages/Payment";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<Produto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
