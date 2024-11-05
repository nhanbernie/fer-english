import { BrowserRouter, Routes, Route, Navigate, Outlet, useNavigate } from "react-router-dom";
// Layout
import HomePage from "./shares/page/Homelayout";
// Management pages
import UserManagementTeacher from "./modules/UserManagement/teacher/page/UserManagement";
import UserManagementAdmin from "./modules/UserManagement/admin/page/UserManagement";
import Attendance from "./modules/Attendance/teacher/page/Attendence";
import ClassManagement from "./modules/ClassManagement/page/ClassManagement";
import SalaryAndFee from "./modules/SalaryAndFee/page/SalaryAndFee";
import WeeklyTimeTable from "./modules/WeeklyTimeTable/components/WeeklyTimeTable";
import Help from "./modules/Help/page/Help";
import { AuthProvider, AuthContext } from "./AuthContext";
import { useContext } from "react";
import SignIn from "./modules/Auth/SignIn/page/SignIn";

// Component to handle role-based access for user management
const ProtectedUserManagement = () => {
  const { role } = useContext(AuthContext);

  if (role === 'admin') {
    return <UserManagementAdmin />;
  } else if (role === 'teacher') {
    return <UserManagementTeacher />;
  } else {
    return <Navigate to="/" />;
  }
};

// PrivateRoutes component to protect routes requiring authentication
const PrivateRoutes = () => {
  const { role } = useContext(AuthContext);
  return role ? <Outlet /> : <Navigate to="/signin" />;
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public route for login */}
          <Route path="/signin" element={<SignIn />} />

          {/* Private routes that require authentication */}
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<HomePage />}>
              {/* Conditionally render UserManagement based on role */}
              <Route path="user-management" element={<ProtectedUserManagement />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="class-management" element={<ClassManagement />} />
              <Route path="salary-fee" element={<SalaryAndFee />} />
              <Route path="weekly-time-table" element={<WeeklyTimeTable />} />
              <Route path="help" element={<Help />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
