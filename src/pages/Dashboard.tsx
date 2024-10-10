import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Briefcase, Star, Clock, Users } from 'lucide-react'
import { AuthContext } from '../context/AuthContext'
import api from '../utils/api'

const Dashboard: React.FC = () => {
  const { user, loading } = useContext(AuthContext)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    if (user) {
      fetchUserProjects()
    }
  }, [user])

  const fetchUserProjects = async () => {
    try {
      const response = await api.get('/projects/user')
      setProjects(response.data)
    } catch (error) {
      console.error('Error fetching user projects:', error)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard icon={Briefcase} title="Active Projects" value={projects.length.toString()} />
        <DashboardCard icon={Star} title="Completed Projects" value="0" />
        <DashboardCard icon={Clock} title="Pending Proposals" value="0" />
        <DashboardCard icon={Users} title="Team Members" value="1" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UserProjects projects={projects} />
        <RecommendedProjects />
      </div>
    </div>
  )
}

// ... (rest of the component remains the same)

export default Dashboard