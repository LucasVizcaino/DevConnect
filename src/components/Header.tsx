import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Users, Briefcase, ShoppingBag, MessageSquare, LogIn, LogOut } from 'lucide-react'
import { AuthContext } from '../context/AuthContext'

const Header: React.FC = () => {
  const { user, logout } = useContext(AuthContext)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">DevConnect</Link>
        <div className="flex space-x-4">
          <Link to="/projects" className="flex items-center text-gray-600 hover:text-blue-600">
            <Briefcase className="w-5 h-5 mr-1" />
            Projects
          </Link>
          <Link to="/marketplace" className="flex items-center text-gray-600 hover:text-blue-600">
            <ShoppingBag className="w-5 h-5 mr-1" />
            Marketplace
          </Link>
          {user ? (
            <>
              <Link to="/dashboard" className="flex items-center text-gray-600 hover:text-blue-600">
                <Users className="w-5 h-5 mr-1" />
                Dashboard
              </Link>
              <Link to="/messages" className="flex items-center text-gray-600 hover:text-blue-600">
                <MessageSquare className="w-5 h-5 mr-1" />
                Messages
              </Link>
              <button onClick={logout} className="flex items-center text-gray-600 hover:text-blue-600">
                <LogOut className="w-5 h-5 mr-1" />
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="flex items-center text-gray-600 hover:text-blue-600">
              <LogIn className="w-5 h-5 mr-1" />
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header