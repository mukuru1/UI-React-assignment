import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/layout";
import { ProtectedRoute } from "./components/guards/protected-route";
import { AdminRoute } from "./components/guards/admin-route";

import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { DashboardPage } from "./pages/dashboard";
import { ProductsPage } from "./pages/products";
import { CategoriesPage } from "./pages/categories";
import { UsersPage } from "./pages/users";

function App() {
  return (
    <Routes>
     
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />

       
        <Route
          path="/users"
          element={
            <AdminRoute>
              <UsersPage />
            </AdminRoute>
          }
        />
      </Route>

      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;
