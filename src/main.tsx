
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Index from './pages/Index.tsx'
import Pricing from './pages/Pricing.tsx'
import Enterprise from './pages/usecases/Enterprise.tsx'
import Startups from './pages/usecases/Startups.tsx'
import NotFound from './pages/NotFound.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/usecases/enterprise" element={<Enterprise />} />
        <Route path="/usecases/startups" element={<Startups />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
