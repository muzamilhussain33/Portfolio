import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashborad"; // Assuming you have this page

// 1. Helper function to check Auth
const checkAdminAuth = () => {
  const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn');
  return isAdminLoggedIn === 'true';
};

// 2. Create a "Protected Route" Wrapper
const ProtectedAdminRoute = ({ children }) => {
  const isAdmin = checkAdminAuth();

  if (!isAdmin) {
    return <Navigate to="/api/admin-login" replace />;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Home />
  },
  {
    path: '/api/admin-login',
    element: <Login />
  },
  {
    path: '/admin', 
    element: (
      <ProtectedAdminRoute>
        <AdminDashboard /> 
      </ProtectedAdminRoute>
    )
  }
]);

function AppRouter() {
  return (
    <RouterProvider router={router} />
  );
}

export default AppRouter;