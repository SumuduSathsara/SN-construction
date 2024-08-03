// AdminAppointments.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Adminheader from '../Component/Adminheader';

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:3001/sever/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      // Handle error if needed
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/sever/appointments/${id}`);
      fetchAppointments();
    } catch (error) {
      console.error('Error deleting appointment:', error);
      // Handle error if needed
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Adminheader
        title="Appointments"
        subtitle="Scheduling Success in Construction"
      />
      
      <table className="min-w-full bg-white border-collapse border-gray-300 shadow-sm rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-300">
            <th className="py-2 px-3 text-left">Name</th>
            <th className="py-2 px-3 text-left">Email</th>
            <th className="py-2 px-3 text-left">NIC</th>
            <th className="py-2 px-3 text-left">Phone</th>
            <th className="py-2 px-3 text-left">City</th>
            <th className="py-2 px-3 text-left">Date</th>
            <th className="py-2 px-3 text-left">Time</th>
            <th className="py-2 px-3 text-left">Type</th>
            <th className="py-2 px-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment._id} className="border-b border-gray-300">
              <td className="py-2 px-3">{appointment.name}</td>
              <td className="py-2 px-3">{appointment.email}</td>
              <td className="py-2 px-3">{appointment.nic}</td>
              <td className="py-2 px-3">{appointment.phone}</td>
              <td className="py-2 px-3">{appointment.city}</td>
              <td className="py-2 px-3">{appointment.date}</td>
              <td className="py-2 px-3">{appointment.time}</td>
              <td className="py-2 px-3">{appointment.appointmentType}</td>
              <td className="py-2 px-3">
                <button
                  onClick={() => handleDelete(appointment._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAppointments;
