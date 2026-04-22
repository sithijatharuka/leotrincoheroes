import { Navigate, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import WhatWeDoPage from './pages/WhatWeDoPage'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'

function App() {
  return (
    <div className="min-h-screen bg-[#f2f1f4]">
      <SiteHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/what-we-do" element={<WhatWeDoPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <SiteFooter />
    </div>
  )
}

export default App
