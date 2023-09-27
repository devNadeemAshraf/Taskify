import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./lib/protected-route";

// Pages
import Home from "./pages/home";
import Auth from "./pages/auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
