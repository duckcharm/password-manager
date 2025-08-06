import { useAuthStore } from "../stores/auth";

export function Dashboard() {
  const token = useAuthStore((state) => state.token);
  return <div>Token: {token}</div>;
}
