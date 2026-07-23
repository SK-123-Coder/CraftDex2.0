// Dependencies
import { Routes, Route, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

// Tabs
import LandingPage from './tabs/LandingPage'
import AboutPage from './tabs/AboutPages'
import ServicesPage from './tabs/ServicesPage'
import ResourcesPage from './tabs/ResourcesPage'
import SettingsPage from './tabs/SettingsPage'

// Auth pages
import SignupPage from './auth/SignupPage'
import LoginPage from './auth/LoginPage'
import AccountRecovery from './auth/AccountRecovery'
import UpdatePassword from './auth/UpdatePassword'

// Dashboard
import DashboardPage from './dashboard/DashboardPage'

// Tools & Services
import ImageToPdf from './tools&service/ImageToPdf'

// Context file
import {AuthContext} from './context/AuthProvider.jsx'

function App() {

  // ===================================================================================================================

    const navigate = useNavigate();
    const { session } = useContext(AuthContext);

    useEffect(() => {
      if (session) {
        // Store session (or part of it)
        sessionStorage.setItem("session", JSON.stringify(session));

        // Redirect
        navigate("/services", { replace: true });
      }
    }, [session]);

  // ===================================================================================================================

  return (
    <div className="min-h-dvh bg-[linear-gradient(90deg,#102548_0%,#0D1328_55%,#1F1A44_100%)]">

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/accountrecovery" element={<AccountRecovery />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/setting" element={<SettingsPage />} />
        <Route path="/update-password" element={<UpdatePassword />} />
        <Route path="/imagetopdf" element={<ImageToPdf />} />
      </Routes>
    </div>
  )
}

export default App
