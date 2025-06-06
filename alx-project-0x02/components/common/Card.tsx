//implement a Card component that accepts title and content as props.

import React from 'react';
// Importing React to create a functional component
import { CardProps } from '../../interfaces';

// Importing CardProps interface from the interfaces directory
const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

//Basic structure of the Card component
// <div>
//  <h2>{title}</h2>
//  <p>{content}</p>
// </div>

export default Card;
// This Card component can be used in any part of the application where you need to display a card with a title and content.
// It uses Tailwind CSS for styling, but you can modify the styles as needed.