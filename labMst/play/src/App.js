//Q1. Create a React Context called UserContext that stores a username string
//    and a isLoggedIn boolean. Provide mock values (e.g., username: 'Arjun', isLoggedIn: true)
//    at the top of your app. In a Profile component deep in the tree, consume this context
//    and display the username without passing it as a prop.


import {createContext,useState,useContext,} from 'react';

const UserContext = createContext();

const mockUser = {
  username: 'Arjun',
  isLoggedIn: true
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(mockUser);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}


export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}


function Profile() {
  const { username, isLoggedIn } = useUser();

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Logged In:</strong> {isLoggedIn ? 'Yes' : 'No'}</p>
    </div>
  );
}


function UserDashboard() {
  return (
    <div style={{ padding: '10px' }}>
      <h3>Dashboard</h3>
      <Profile />
    </div>
  );
}


function App() {
  return (
    <UserProvider>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '50px auto' }}>
        <h1>React Context Demo</h1>
        <UserDashboard />
      </div>
    </UserProvider>
  );
}

export default App;


// Q3. Implement a protected React route called /dashboard.
//     If a variable isAuthenticated (stored in state or context) is false,
//     redirect the user to /login using React Router's Navigate component.
//     Toggle the isAuthenticated flag using a button on the Login page to test the redirect behavior.


import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext"; 

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => {
    setIsAuthenticated((prev) => !prev);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
