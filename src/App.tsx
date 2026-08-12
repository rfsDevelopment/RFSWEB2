import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LocaleProvider } from "@/contexts/LocaleContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
  <LocaleProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* Inbound links to the previous standalone training page. */}
        <Route path="/formaciones" element={<Navigate to="/#formacion" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </LocaleProvider>
);

export default App;
