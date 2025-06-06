import React from "react";

// 1. Define the props for the Button component using an interface
interface ButtonProps {
  children: React.ReactNode; // the content inside the <Button> component (text, icon, etc.)
  size?: "small" | "medium" | "large"; // optional prop - only accepts one of these specific strings
  shape?: "rounded-sm" | "rounded-md" | "rounded-full"; // optional prop - for Tailwind border radius options
  onClick?: () => void; // optional prop - function that runs when button is clicked
}

// 2. Create the functional Button component with props
const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium", // default value if size isn't provided
  shape = "rounded-md", // default value if shape isn't provided
  onClick,
}) => {
  // 3. Define a map of size to corresponding Tailwind CSS classes
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    // 4. Apply Tailwind CSS classes dynamically based on size and shape
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClasses[size]} ${shape} hover:bg-blue-700 transition`}
    >
      {children} {/* 5. Render whatever is passed inside the Button */}
    </button>
  );
};

export default Button;
