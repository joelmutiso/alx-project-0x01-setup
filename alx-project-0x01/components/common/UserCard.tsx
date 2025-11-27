import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, username, email, address, company, website }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">@{username}</p>
      </div>
      
      <div className="text-gray-700 text-base space-y-2">
        <p>📧 {email}</p>
        <p>📍 {address.city}, {address.street}</p>
        <p>🏢 {company.name}</p>
        <p>🌐 <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{website}</a></p>
      </div>
    </div>
  );
}

export default UserCard;