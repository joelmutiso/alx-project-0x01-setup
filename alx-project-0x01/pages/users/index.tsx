import React, { useState } from 'react';
import UserCard from '@/components/common/UserCard';
import UserModal from '@/components/common/UserModal';
import { UserProps, UserData } from '@/interfaces';

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usersList, setUsersList] = useState<UserProps[]>(posts);

  const handleAddUser = (user: UserData) => {
    const newUser = { ...user, id: usersList.length + 1 };
    setUsersList([...usersList, newUser]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-light">Users Directory</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add User
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {usersList.map((user, index) => (
          <UserCard 
            key={index}
            {...user} 
          />
        ))}
      </div>

      {isModalOpen && (
        <UserModal 
          onClose={() => setIsModalOpen(false)} 
          onSubmit={handleAddUser} 
        />
      )}
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;