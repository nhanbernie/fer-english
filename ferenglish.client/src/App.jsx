import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
// Layout
import Homelayout from "./shares/page/Homelayout";
import HomePage from "./shares/components/HomePage";
// Management pages
import UserManagementTeacher from "./modules/UserManagement/teacher/page/UserManagement";
import UserManagementAdmin from "./modules/UserManagement/admin/page/UserManagement";
// Class management pages
import ClassManagementTeacher from "./modules/ClassManagement/teacher/page/ClassManagement";
import ClassManagementAdmin from "./modules/ClassManagement/admin/page/ClassManagement";

import Attendance from "./modules/Attendance/teacher/page/Attendence";
import SalaryAndFee from "./modules/SalaryAndFee/admin/page/SalaryAndFee";
import WeeklyTimeTable from "./modules/WeeklyTimeTable/components/WeeklyTimeTable";
import Help from "./modules/Help/page/Help";
import { AuthProvider, AuthContext } from "./AuthContext";
import { useContext } from "react";
import SignIn from "./modules/Auth/SignIn/page/SignIn";
import ClassAttendance from "../src/modules/Attendance/teacher/page/ClassAttendance";
// Component to handle role-based access for user management
const ProtectedUserManagement = () => {
  const { role } = useContext(AuthContext);

  if (role === "admin") {
    return <UserManagementAdmin />;
  } else if (role === "teacher") {
    return <UserManagementTeacher />;
  } else {
    return <Navigate to="/" />;
  }
};

// Component to handle role-based access for Class Management
const ProtectedClassManagement = () => {
  const { role } = useContext(AuthContext);

  if (role === "admin") {
    return <ClassManagementAdmin />;
  } else if (role === "teacher") {
    return <ClassManagementTeacher />;
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
            <Route path="/" element={<Homelayout />}>
              {/* Default nested route displayed in Outlet */}
              <Route index element={<HomePage />} />
              {/* Conditionally render UserManagement based on role */}
              <Route
                path="user-management"
                element={<ProtectedUserManagement />}
              />
              <Route path="attendance" element={<Attendance />} />
              <Route path="class-attendance/:classId" element={<ClassAttendance />} />
  
              <Route path="class-management" element={<ProtectedClassManagement />} />
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
