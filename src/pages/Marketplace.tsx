import React from 'react'
import { Wrench, Book, DollarSign, Star } from 'lucide-react'

const Marketplace: React.FC = () => {
  const categories = [
    { name: 'Developer Tools', icon: Wrench, items: [
      { id: 1, name: 'Code Editor Pro', price: '$49.99', rating: 4.5 },
      { id: 2, name: 'DevOps Toolkit', price: '$99.99', rating: 4.8 },
    ]},
    { name: 'Project Resources', icon: Book, items: [
      { id: 3, name: 'UI/UX Design Templates', price: '$29.99', rating: 4.2 },
      { id: 4, name: 'Project Management Guide', price: '$19.99', rating: 4.6 },
    ]},
    { name: 'Funding Opportunities', icon: DollarSign, items: [
      { id: 5, name: 'Startup Accelerator Program', price: 'Apply Now', rating: 4.9 },
      { id: 6, name: 'Tech Innovation Grant', price: 'Apply Now', rating: 4.7 },
    ]},
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map(category => (
          <div key={category.name} className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center mb-4">
              <category.icon className="w-8 h-8 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">{category.name}</h2>
            </div>
            <ul className="space-y-4">
              {category.items.map(item => (
                <li key={item.id} className="border-b pb-2">
                  <h3 className="font-semibold">{item.name}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-gray-600">{item.price}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 w-full">
              View All
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marketplace