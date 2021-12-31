import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../context/Auth";
import { DashboardPage } from "../pages/Dashboard";
import { LoginPage } from "../pages/LoginPage";

export const RoutesMain = () => {
  const { token } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      {/* <Route
        path="/home-user"
        element={token ? <HomeUser /> : <Navigate replace to="/login-user" />}
      /> */}
    </Routes>
  );
};
