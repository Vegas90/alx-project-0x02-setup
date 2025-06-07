//Fetch user data from this API and display it on the /users page using the UserCard component.
//API - https://jsonplaceholder.typicode.com/users

import React from "react";
import UserCard from "../components/common/UserCard"; // adjust path
import { UserProps } from "../interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">User List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;

// ✅ Required by the error: Static generation
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
}


//Whats happening;
//useEffect	Runs once on component mount to fetch users
//useState	Stores fetched users and loading state
//fetch()	Calls the JSONPlaceholder /users API
//<UserCard {...user} />	Spreads the user data into your component props