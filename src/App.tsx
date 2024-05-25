// src/App.tsx
import React, { Suspense, lazy } from 'react';
import CoverImg from "./assets/hero/hero_cover.jpg";
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Loading from './assets/loading.svg';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProtectedRoute from './components/ProtectedRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const WatchPage = lazy(() => import('./pages/WatchPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const StorePage = lazy(() => import('./pages/StorePage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));
const AdminDashboard = lazy(() => import('./admin/AdminDashboard'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignUpPage = lazy(() => import('./pages/SignupPage'));

const bgImage = {
 backgroundImage: `url(${CoverImg})`,
 backgroundSize: "cover",
 backgroundPosition: "center",
 backgroundRepeat: "no-repeat",
 height: "100%",
 width: "100%",
 }; 

 const loadingAnimation = {
  backgroundImage: `url(${Loading})`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%"
 };

const App: React.FC = () => {
  return (
    <>
    <Suspense fallback={<div style={loadingAnimation}></div>}>
    <div style={bgImage}>
    <Navbar />
      <div className="flex flex-row">
        <div className="flex-col z-40">
        <Sidebar />
        </div>
      <div className="flex-row flex flex-grow">
            <Routes>
              <Route path="/GameCreditsByJacob/" element={<Hero />} />
              <Route path="/GameCreditsByJacob/home" element={<HomePage />} />
              <Route path="/GameCreditsByJacob/watch" element={<WatchPage />} />
              <Route path="/GameCreditsByJacob/events" element={<EventsPage />} />
              <Route path="/GameCreditsByJacob/store" element={<StorePage />} />
              <Route path="/GameCreditsByJacob/support" element={<SupportPage />} />
              <Route path="/GameCreditsByJacob/login" element={<LoginPage />} />
              <Route path="/GameCreditsByJacob/signup" element={<SignUpPage />} />
              <Route path="/GameCreditsByJacob/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
            </Routes>
      </div>
      </div>
    </div>
    </Suspense>
    </>
  );
};

export default App;
