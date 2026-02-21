import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home.jsx";
import BillboardsPage from "./pages/billboards.jsx";
import RegisterPage from "./pages/register.jsx";
import LoginPage from "./pages/login.jsx";
import AboutPage from "./pages/about.jsx";
import ContactPage from "./pages/contact.jsx";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute";
export default function App() {
  return (
    <BrowserRouter>
      <Toaster />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <AboutPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <ContactPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/billboards"
          element={
            <ProtectedRoute>
              <BillboardsPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<h1>404 not found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
