import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Modal from './components/Modal'
import TaskTable from './components/TaskTable'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [editTask, setEditTask] = useState(null)
  const [search, setSearch] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  )

  const handleSubmit = task => {
    if (editTask) {
      setTasks(tasks.map(t => (t.id === task.id ? task : t)))
    } else {
      setTasks([...tasks, { ...task, id: Date.now() }])
    }
    setIsOpen(false)
    setEditTask(null)
  }

  const handleDelete = id => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded"
            onClick={() => setIsSidebarOpen(true)}
          >
            ☰ Menu
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => {
              setEditTask(null)
              setIsOpen(true)
            }}
          >
            Add Task
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-4 py-2"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <TaskTable
          tasks={filteredTasks}
          onEdit={task => {
            setEditTask(task)
            setIsOpen(true)
          }}
          onDelete={handleDelete}
        />
      </div>

      {isOpen && (
        <Modal
          onClose={() => {
            setIsOpen(false)
            setEditTask(null)
          }}
          onSubmit={handleSubmit}
          initialData={editTask}
        />
      )}
    </div>
  )
}
