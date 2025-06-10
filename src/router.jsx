import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Overview from "./components/Overview"


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/overview" element={<Overview/>} />
         <Route path="*" element={<Navigate to="/overview" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
