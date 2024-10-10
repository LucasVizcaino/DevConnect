import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter } from 'lucide-react'

const ProjectListing: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const fetchProjects = async () => {
    try {
      setLoading(true)
      // Replace this with an actual API call
      const response = await new Promise(resolve => 
        setTimeout(() => resolve([]), 1000)
      )
      if (response.length === 0) {
        setHasMore(false)
      } else {
        setProjects(prevProjects => [...prevProjects, ...response])
        setPage(prevPage => prevPage + 1)
      }
    } catch (error) {
      console.error('Error fetching projects:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      fetchProjects()
    }
  }

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedSkills.length === 0 || selectedSkills.some(skill => project.skills.includes(skill)))
  )

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Project Listings</h1>
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" />
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="relative">
            <select
              multiple
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedSkills}
              onChange={(e) => setSelectedSkills(Array.from(e.target.selectedOptions, option => option.value))}
            >
              {/* Add skill options here */}
            </select>
            <Filter className="absolute right-3 top-2.5 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="space-y-6">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-2">Team Size: {project.teamSize}</p>
            <p className="text-gray-600 mb-4">Budget: {project.budget}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.skills.map(skill => (
                <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{skill}</span>
              ))}
            </div>
            <Link
              to={`/projects/${project.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      {loading && <p className="text-center mt-4">Loading projects...</p>}
      {!loading && hasMore && (
        <button
          onClick={handleLoadMore}
          className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Load More Projects
        </button>
      )}
      {!loading && !hasMore && projects.length === 0 && (
        <p className="text-center mt-4">No projects available at the moment.</p>
      )}
    </div>
  )
}

export default ProjectListing