import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard";
import { LoginPage } from "../pages/LoginPage";
import { SponsorsPage } from "../pages/Sponsors";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/sponsors" element={<SponsorsPage />} />
      {/* <Route
        path="/home-user"
        element={token ? <HomeUser /> : <Navigate replace to="/login-user" />}
      /> */}
    </Routes>
  );
};
