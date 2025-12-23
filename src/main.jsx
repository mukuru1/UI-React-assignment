import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./app.jsx";

import { AuthProvider } from ".components/context/AuthContext";
import { ProductProvider } from ".components/context/ProductContext";
import { CategoryProvider } from ".components/context/CategoryContext";
import { UserProvider } from ".components/context/UserContext";
import { ThemeProvider } from ".components/context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <UserProvider>
            <CategoryProvider>
              <ProductProvider>
                <App />
              </ProductProvider>
            </CategoryProvider>
          </UserProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
