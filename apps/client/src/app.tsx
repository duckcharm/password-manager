import { BrowserRouter, Route, Routes } from "react-router";
import { CreateAccount } from "./pages/accounts/create";
import { Home } from "./pages/home";
import { NotFound } from "./pages/not-found";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounts/create" element={<CreateAccount />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
