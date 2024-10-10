import React from 'react'
import { useParams } from 'react-router-dom'
import { Users, Calendar, DollarSign, Star } from 'lucide-react'

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  // Mock project data (replace with actual data fetching)
  const project = {
    id,
    title: 'E-commerce Platform Development',
    description: 'We are looking for experienced developers to build a scalable e-commerce platform with modern technologies.',
    requiredSkills: ['React', 'Node.js', 'MongoDB', 'AWS'],
    teamSize: 5,
    duration: '6 months',
    budget: '$50,000 - $75,000',
    postedBy: 'TechCorp Inc.',
    postedDate: '2023-04-01',
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Project Description</h2>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <h3 className="text-lg font-semibold mb-2">Required Skills</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.requiredSkills.map((skill) => (
              <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                {skill}
              </span>
            ))}
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Apply for This Project
          </button>
        </div>
        <div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Project Details</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-gray-600" />
                <span>Team Size: {project.teamSize} developers</span>
              </li>
              <li className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-gray-600" />
                <span>Duration: {project.duration}</span>
              </li>
              <li className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-gray-600" />
                <span>Budget: {project.budget}</span>
              </li>
              <li className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-gray-600" />
                <span>Posted by: {project.postedBy}</span>
              </li>
              <li className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-gray-600" />
                <span>Posted on: {project.postedDate}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails