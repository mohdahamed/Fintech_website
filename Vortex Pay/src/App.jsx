import React, { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { AuthProvider, useAuth } from './Pages/AuthContext'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Features from './Pages/Features'
import Services from './Pages/Services'
import Testimonials from './Pages/Testimonials'
import Contact from './Pages/Contact'

function AppContent() {
  const { initializeUser } = useAuth();

  useEffect(() => {
    initializeUser();
  }, [initializeUser]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'features', element: <Features /> },
        { path: 'services', element: <Services /> },
        { path: 'testimonials', element: <Testimonials /> },
        { path: 'contact', element: <Contact /> }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App