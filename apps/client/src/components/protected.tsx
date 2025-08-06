import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../stores/auth";

export function Protected() {
  const token = useAuthStore((state) => state.token);
  return !!token ? <Outlet /> : <Navigate to="/login" />;
}
