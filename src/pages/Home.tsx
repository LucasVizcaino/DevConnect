import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Zap, Users } from 'lucide-react'

const Home: React.FC = () => {
  const [userProjects, setUserProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating an API call to fetch user-specific projects
    const fetchUserProjects = async () => {
      try {
        // Replace this with an actual API call
        const response = await new Promise(resolve => setTimeout(() => resolve([]), 1000))
        setUserProjects(response)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching user projects:', error)
        setLoading(false)
      }
    }

    fetchUserProjects()
  }, [])

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Connect with Developers and Projects</h1>
        <p className="text-xl text-gray-600 mb-8">Find your next opportunity or the perfect developer for your project</p>
        <div className="flex justify-center space-x-4">
          <Link to="/projects" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">Find Projects</Link>
          <Link to="/post-project" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300">Post a Project</Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Search className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Advanced Search</h3>
          <p className="text-gray-600">Find the perfect match for your project or skills</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Zap className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Skill-based Matching</h3>
          <p className="text-gray-600">Get recommendations based on your expertise</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Collaborate</h3>
          <p className="text-gray-600">Connect and work with developers worldwide</p>
        </div>
      </section>

      <section className="bg-gray-200 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Your Projects</h2>
        {loading ? (
          <p className="text-center text-gray-600">Loading your projects...</p>
        ) : userProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userProjects.map((project: any) => (
              <div key={project.id} className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">You have no projects yet. Start by posting a new project!</p>
        )}
      </section>
    </div>
  )
}

export default Home