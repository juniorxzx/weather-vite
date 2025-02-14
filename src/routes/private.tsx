import { Navigate, Outlet } from "react-router-dom";

function Private() {
  const isAuthenticated = localStorage.getItem("auth");
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

export default Private;
