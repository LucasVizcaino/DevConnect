import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import api from '../utils/api'

const PostProject: React.FC = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    requiredSkills: '',
    teamSize: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProjectData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await api.post('/projects', {
        ...projectData,
        requiredSkills: projectData.requiredSkills.split(',').map(skill => skill.trim()),
        teamSize: parseInt(projectData.teamSize),
      })
      console.log('Project submitted:', response.data)
      navigate('/dashboard')
    } catch (error) {
      console.error('Error submitting project:', error)
    }
  }

  if (!user) {
    navigate('/login')
    return null
  }

  return (
    // ... (rest of the component remains the same)
  )
}

export default PostProject