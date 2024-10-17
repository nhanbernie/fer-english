import { BrowserRouter, Routes, Route } from "react-router-dom";
import AttendencePage from "./modules/Attendence/pages/AttendencePage";
import CompensationPage from "./modules/Compensation/pages/CompensationPage";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AttendencePage />} />
      <Route path="/compensation" element={<CompensationPage />} />
      <Route path="/compensation" element={<CompensationPage />} />
      <Route path="/compensation" element={<CompensationPage />} />
      <Route path="/compensation" element={<CompensationPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App