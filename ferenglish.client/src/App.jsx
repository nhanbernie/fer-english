import { BrowserRouter, Routes, Route } from "react-router-dom";
import AttendencePage from "./modules/Attendence/pages/AttendencePage";
import CompensationPage from "./modules/Compensation/pages/CompensationPage";
import Dashboard from "./shares/page/Homelayout";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/AttendencePage" element={<AttendencePage />} />
      <Route path="/compensation" element={<CompensationPage />} />
      <Route path="/compensation" element={<CompensationPage />} />
      <Route path="/compensation" element={<CompensationPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App