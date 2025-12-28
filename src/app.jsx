import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/format";
import { ProtectedRoute } from "./components/routes/AdminRoute";
import { AdminRoute } from "./components/routes/ProtectedRoute";

import { LoginPage } from "./components/pages/login";
import { RegisterPage } from "./components/pages/register";
import { DashboardPage } from "./components/pages/dashboard";
import { ProductsPage } from "./components/pages/products";
import { CategoriesPage } from "./components/pages/categories";
import { UsersPage } from "./components/pages/users";

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
