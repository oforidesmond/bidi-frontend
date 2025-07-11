import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
// import PersonnelLogin from './pages/PersonnelLogin'
import Login from './pages/Login';
// import ResetPassword from './pages/ResetPassword';
// import ForgotPassword from './pages/ForgotPassword';
// import Onboarding from './pages/Onboarding';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { AuthProvider } from './AuthContext';
import OMCRegistration from './pages/OMCRegistration';
import RegisteredOMC from './pages/RegisteredOMC';

const MainLayout: React.FC = () => {
  return (
   <div className="flex min-h-screen">
      {/* Sidebar (visible on all screens) */}
      <Sidebar />
      {/* Main content area */}
      <div className="flex-1 flex flex-col !bg-[#EEFFF6]">
        {/* Header */}
        <Header />
        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-7 mt-[30px] ml-[2px] collapsed:ml-[80px]">
          <Outlet /> {/* Renders Home, Onboarding, etc. */}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        {/* Routes with Header and Sidebar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/onboarding" element={<Onboarding />} /> */}
           <Route path="/register-omc" element={<OMCRegistration />} />
          <Route path="/registered-omc" element={<RegisteredOMC />} />
        </Route>
        {/* Routes without Header and Sidebar */}
        {/* <Route path="/login" element={<PersonnelLogin />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> */}

      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;