import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './pages/Login/LoginForm';
import './styles/App.css';
import Dashboard from './pages/dashboard';
import Properties from './components/Properties/properties';
import UnAssignedPurchases from './components/Purchases/unAssigned';
import AssignedPurchases from './components/Purchases/assigned';
import Receipts from './components/Receipts/receipt';
import Users from './components/Users/user';
import Companies from './components/Companies/companies';
import LeftNavigation from './components/LeftNavigation/leftNavigation';
import Purchases from './components/Purchases/purchases';
import Reports from './components/Reports/reports';

// Helper function to check for token
const isAuthenticated = () => {
  return !!localStorage.getItem('token'); // or use sessionStorage based on your logic
};

// Private route wrapper
const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

function App() {
  return (
    <div className="app">
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<LoginForm />} />

        {/* Protected Routes */}
        <Route path="/" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/leftNavigation" element={<PrivateRoute element={<LeftNavigation />} />} />
        <Route path="/purchases" element={<PrivateRoute element={<Purchases />} />} />
        <Route path="/receipts" element={<PrivateRoute element={<Receipts />} />} />
        <Route path="/reports" element={<PrivateRoute element={<Reports />} />} />
        <Route path="/properties" element={<PrivateRoute element={<Properties />} />} />
        <Route path="/purchases-unassiged" element={<PrivateRoute element={<UnAssignedPurchases />} />} />
        <Route path="/purchases-assiged" element={<PrivateRoute element={<AssignedPurchases />} />} />
        <Route path="/users" element={<PrivateRoute element={<Users />} />} />
        <Route path="/companies" element={<PrivateRoute element={<Companies />} />} />
      </Routes>
    </div>
  );
}

export default App;
