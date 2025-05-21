import React from 'react'

export default function TaskTable({ tasks, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded overflow-x-auto">
      <table className="w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">Description</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center p-4 text-gray-500">No tasks found</td>
            </tr>
          ) : (
            tasks.map(task => (
              <tr key={task.id} className="border-t">
                <td className="p-2">{task.title}</td>
                <td className="p-2">{task.description}</td>
                <td className="p-2">
                  <button
                    onClick={() => onEdit(task)}
                    className="text-blue-500 hover:underline mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(task.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
