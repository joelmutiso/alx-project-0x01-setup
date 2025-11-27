import React, { useState } from 'react';
import { UserModalProps, UserData } from '@/interfaces';

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create a new user object based on the UserData interface
    const newUser: UserData = {
      name,
      username,
      email,
      // Default placeholder values for complex fields not in the form
      address: {
        street: "New Street",
        suite: "Apt 101",
        city: "Tech City",
        zipcode: "00000",
        geo: { lat: "0", lng: "0" }
      },
      phone: "000-000-0000",
      website: "newuser.com",
      company: {
        name: "New Company",
        catchPhrase: "Innovation",
        bs: "tech"
      }
    };

    onSubmit(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center overflow-y-auto">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input 
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <button 
              type="button" 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 font-semibold py-2 px-4 rounded focus:outline-none"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;