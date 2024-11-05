import  { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(null);

  const login = (email, password) => {
    // Example of fake data for authentication
    const fakeData = [
      { email: "teacher@gmail.com", password: "teacher", role: "teacher" },
      { email: "admin@gmail.com", password: "admin", role: "admin" },
      { email: "student@gmail.com", password: "student", role: "student" }
    ];

    const user = fakeData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setRole(user.role);
      return true;
    }
    return false;
  };

  const logout = () => {
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
