import React from 'react'
import { Star, Briefcase, Award } from 'lucide-react'

const UserProfile: React.FC = () => {
  // Mock user data (replace with actual user data)
  const user = {
    name: 'John Doe',
    title: 'Full Stack Developer',
    location: 'New York, USA',
    email: 'john.doe@example.com',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB'],
    experience: [
      { id: 1, role: 'Senior Developer', company: 'Tech Corp', duration: '2018 - Present' },
      { id: 2, role: 'Web Developer', company: 'StartUp Inc', duration: '2015 - 2018' },
    ],
    education: [
      { id: 1, degree: 'M.S. Computer Science', school: 'Tech University', year: '2015' },
      { id: 2, degree: 'B.S. Computer Science', school: 'State College', year: '2013' },
    ],
    projects: [
      { id: 1, name: 'E-commerce Platform', description: 'Built a scalable e-commerce platform using MERN stack' },
      { id: 2, name: 'AI Chatbot', description: 'Developed an AI-powered chatbot for customer support' },
    ],
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img
            src="https://via.placeholder.com/150"
            alt={user.name}
            className="w-32 h-32 rounded-full mx-auto md:mx-0"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
          <p className="text-xl text-gray-600 mb-4">{user.title}</p>
          <p className="text-gray-600 mb-2">{user.location}</p>
          <p className="text-gray-600 mb-4">{user.email}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {user.skills.map((skill) => (
              <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        {user.experience.map((exp) => (
          <div key={exp.id} className="mb-4">
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-gray-500">{exp.duration}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        {user.education.map((edu) => (
          <div key={edu.id} className="mb-4">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-600">{edu.school}</p>
            <p className="text-gray-500">{edu.year}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        {user.projects.map((project) => (
          <div key={project.id} className="mb-4">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          <Star className="inline-block w-5 h-5 mr-2" />
          Endorse Skills
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">
          <Briefcase className="inline-block w-5 h-5 mr-2" />
          Invite to Project
        </button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300">
          <Award className="inline-block w-5 h-5 mr-2" />
          Leave Review
        </button>
      </div>
    </div>
  )
}

export default UserProfile