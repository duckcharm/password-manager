import { BrowserRouter, Route, Routes } from "react-router";
import { Protected } from "./components/protected";
import { CreateAccount } from "./pages/accounts/create";
import { Dashboard } from "./pages/dashboard";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { NotFound } from "./pages/not-found";
import { Register } from "./pages/register";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Protected />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/accounts/create" element={<CreateAccount />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
