import React, { useState } from "react";

// Props interface to define expected props for PostModal
interface PostModalProps {
  isOpen: boolean; // Determines if the modal should be shown
  onClose: () => void; // Function to close the modal
  onSubmit: (data: { title: string; content: string }) => void; // Function to pass submitted data to parent
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  // Local state to hold form input values
  const [title, setTitle] = useState("");     // Stores the input for the title field
  const [content, setContent] = useState(""); // Stores the input for the content field

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page reload on form submit
    onSubmit({ title, content }); // Passes form data to parent component
    setTitle(""); // Clears the title input after submission
    setContent(""); // Clears the content input
    onClose(); // Closes the modal
  };

  // If modal is not open, don't render it
  if (!isOpen) return null;

  // Modal markup
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal box */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">Create a New Post</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)} // Updates local state on input
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Content</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              value={content}
              onChange={(e) => setContent(e.target.value)} // Updates local state on input
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose} // Closes the modal without submitting
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit" // Triggers handleSubmit
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;


//useState("") creates a state variable initialized to an empty string.
//setTitle and setContent are used to update the form fields.
//These values are collected and passed back to the parent when the form is submitted.