import React, { useState, useEffect } from 'react'

export default function Modal({ onClose, onSubmit, initialData }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState({})
  

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title)
      setDescription(initialData.description)
    }
  }, [initialData])

  const validate = () => {
    const errors = {}
    if (!title.trim()) errors.title = 'Required'
    if (!description.trim()) errors.description = 'Required'
    return errors
  }

  const handleSubmit = e => {
    e.preventDefault()
    const validation = validate()
    if (Object.keys(validation).length > 0) {
      setError(validation)
      return
    }
    onSubmit({
      id: initialData ? initialData.id : Date.now(),
      title,
      description,
    })
    setTitle('')
    setDescription('')
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{initialData ? 'Edit Task' : 'Add Task'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full border p-2 rounded"
            />
            {error.title && <p className="text-red-500 text-sm">{error.title}</p>}
          </div>
          <div>
            <textarea
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full border p-2 rounded"
            />
            {error.description && <p className="text-red-500 text-sm">{error.description}</p>}
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded cursor-pointer hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
