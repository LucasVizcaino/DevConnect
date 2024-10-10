import React from 'react'
import { Link } from 'react-router-dom'

const SearchResults: React.FC = () => {
  // Mock search results (replace with actual search functionality)
  const results = [
    { id: 1, type: 'project', title: 'E-commerce Platform', skills: ['React', 'Node.js', 'MongoDB'] },
    { id: 2, type: 'developer', name: 'Jane Doe', skills: ['JavaScript', 'Python', 'Machine Learning'] },
    { id: 3, type: 'project', title: 'Mobile Game Development', skills: ['Unity', 'C#', '3D Modeling'] },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>
      <div className="space-y-6">
        {results.map((result) => (
          <div key={result.id} className="bg-white shadow-md rounded-lg p-6">
            {result.type === 'project' ? (
              <ProjectResult project={result} />
            ) : (
              <DeveloperResult developer={result} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const ProjectResult: React.FC<{ project: any }> = ({ project }) => (
  <>
    <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
    <p className="text-gray-600 mb-2">Project</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.skills.map((skill: string) => (
        <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
          {skill}
        </span>
      ))}
    </div>
    <Link
      to={`/projects/${project.id}`}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
    >
      View Project
    </Link>
  </>
)

const DeveloperResult: React.FC<{ developer: any }> = ({ developer }) => (
  <>
    <h2 className="text-xl font-semibold mb-2">{developer.name}</h2>
    <p className="text-gray-600 mb-2">Developer</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {developer.skills.map((skill: string) => (
        <span key={skill} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
          {skill}
        </span>
      ))}
    </div>
    <Link
      to={`/profile/${developer.id}`}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
    >
      View Profile
    </Link>
  </>
)

export default SearchResults