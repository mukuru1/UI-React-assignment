import { Routes, Route } from "react-router-dom";


import { Sidebar } from "./components/sections/sidebar";
import { Navbar } from "./components/sections/navbar";
import { CTA } from "./components/sections/cta";
import { RecentlyAddedProducts } from "./components/sections/recently-added-products";
import { RecentActivity } from "./components/sections/recent-activity";
import { QuickActions } from "./components/sections/quick-actions";
import { StatSection } from "./components/sections/stat-section";
import { UsersTable } from "./components/sections/users-table";


import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Products from "./components/pages/products";
import Categories from "./components/pages/categories";
import Users from "./components/pages/users";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

function DashboardLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="hidden md:flex md:w-60 md:flex-col md:fixed md:inset-y-0 border-r bg-background z-40">
        <div className="flex-1 p-4 overflow-y-auto">
          <Sidebar />
        </div>
      </aside>

      <div className="flex-1 flex flex-col w-full md:pl-60">
        <header className="sticky top-0 z-30 bg-background">
          <Navbar />
        </header>

        <main className="flex-1 bg-muted/50 p-4 md:p-6 flex flex-col gap-6 w-full">
          <Routes>
            {/* Dashboard Home */}
            <Route
              path="/"
              element={
                <>
                  <CTA />
                  <StatSection />
                  <RecentlyAddedProducts />
                  <UsersTable />
                  <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-2">
                    <RecentActivity />
                    <QuickActions />
                  </div>
                </>
              }
            />

            {/* CRUD Pages */}
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<Categories />} />

            {/* Admin Only */}
            <Route
              path="/users"
              element={
                <AdminRoute>
                  <Users />
                </AdminRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Dashboard */}
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
