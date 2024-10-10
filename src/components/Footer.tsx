import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">DevConnect</h3>
            <p className="text-sm">Connecting developers with exciting projects worldwide.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/faq" className="hover:text-blue-400">FAQ</a></li>
              <li><a href="/terms" className="hover:text-blue-400">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">Email: support@devconnect.com</p>
            <p className="text-sm">Phone: +1 (555) 123-4567</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-blue-400"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white hover:text-blue-400"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-white hover:text-blue-400"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; 2023 DevConnect. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer