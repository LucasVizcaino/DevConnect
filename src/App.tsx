import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import UserProfile from './pages/UserProfile'
import ProjectListing from './pages/ProjectListing'
import Marketplace from './pages/Marketplace'
import Messaging from './pages/Messaging'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import ProjectDetails from './pages/ProjectDetails'
import SearchResults from './pages/SearchResults'
import PostProject from './pages/PostProject'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-100">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/projects" element={<ProjectListing />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/messages" element={<Messaging />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/post-project" element={<PostProject />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App