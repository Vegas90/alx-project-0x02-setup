import React from "react";
import { UserProps} from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h3 className="text-lg font-bold mb-2">User ID: {id}</h3>
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-700 mb-2">Username: {username}</p>
      <p className="text-gray-700 mb-2">Email: {email}</p>
        <p className="text-gray-700 mb-2">Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
        <p className="text-gray-700 mb-2">Geo: {address.geo.lat}, {address.geo.lng}</p>
    </div>
  );
};

export default UserCard;
