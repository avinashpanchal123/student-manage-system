'use client'

import { useState, useEffect } from 'react';
import { services } from '@/services/utils';

function Student({ params }) {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const data = await services.getSingleStudent(params.id);
        setStudent(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading student data: {error.message}</div>;
  }

  return (
    <div>
      {student ? (
        <div className="p-4 bg-white shadow rounded border border-gray-200">
          <h2 className="text-xl font-bold mb-2">Student Details</h2>
          <p><strong>ID:</strong> {student.id}</p>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Username:</strong> {student.username}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Phone:</strong> {student.phone}</p>
        </div>
      ) : (
        <div>No student data available</div>
      )}
    </div>
  );
}

export default Student;
