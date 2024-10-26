import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./shares/page/Homelayout"; 
import Attendance from "./modules/Attendance/page/Attendence";
import ClassManagement from "./modules/ClassManagement/page/ClassManagement";
import SalaryAndFee from "./modules/SalaryAndFee/page/SalaryAndFee";
import Help from "./modules/Help/page/Help";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* HomePage (or Dashboard) serves as the layout wrapping other pages */}
        <Route path="/" element={<HomePage />}>
          {/* Nested routes rendered inside Outlet within HomePage */}
          <Route path="attendance" element={<Attendance />} />
          <Route path="class-management" element={<ClassManagement />} />
          <Route path="salary-fee" element={<SalaryAndFee />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
