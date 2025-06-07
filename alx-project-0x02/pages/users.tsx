//Fetch user data from this API and display it on the /users page using the UserCard component.
//API - https://jsonplaceholder.typicode.com/users

import React, { useEffect, useState } from "react";
import UserCard from "../components/common/UserCard"; // Adjust path as needed
import { UserProps } from "../interfaces";

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">User List</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading users...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersPage;

//Whats happening;
//useEffect	Runs once on component mount to fetch users
//useState	Stores fetched users and loading state
//fetch()	Calls the JSONPlaceholder /users API
//<UserCard {...user} />	Spreads the user data into your component props