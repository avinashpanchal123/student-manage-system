'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MdVisibility, MdEdit, MdDelete } from 'react-icons/md';
import axios from 'axios'
import { services } from '@/services/utils';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [studentID, setStudentID] = useState(null)
  useEffect(() => {
    console.log("I am called");

    (async () => {
      try {
        // const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        // let data = res.data;
         let data = await services.getAllStudents();
         console.log(data);
         
        // if( typeof data == )
        setStudents(data)
      } catch (err) {
        throw err;
      }
    })()
  }, [])

  const viewStudent = () => {
    const router = useRouter();
    router.push(`/students/${studentID}`);
    
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{student.id}</td>
              <td className="py-2 px-4 border-b">{student.name}</td>
              <td className="py-2 px-4 border-b">{student.username}</td>
              <td className="py-2 px-4 border-b">{student.email}</td>
              <td className="py-2 px-4 border-b">{student.phone}</td>
              <td className="py-2 px-4 border-b">
                <div className="flex items-center space-x-2">
                  <MdVisibility title="View" style={{ cursor: 'pointer' }} />
                  <MdEdit title="Edit" style={{ cursor: 'pointer' }} />
                  <MdDelete title="Delete" style={{ cursor: 'pointer', color: 'red' }} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Students;