import React from 'react';
import { Link, Outlet } from 'react-router';

function AdminStudents() {
  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Students Management</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link
          to="add"
          className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-blue-50 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Add Student Record</h3>
              <p className="text-sm text-gray-500 mt-1">Create new student record</p>
            </div>
          </div>
        </Link>
        
        <Link
          to="delete"
          className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-red-300 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-red-50 text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Delete Student Record</h3>
              <p className="text-sm text-gray-500 mt-1">Remove existing student</p>
            </div>
          </div>
        </Link>
      </div>
      
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminStudents;