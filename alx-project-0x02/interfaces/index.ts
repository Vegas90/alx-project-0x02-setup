//reusable Card component that accepts props for title and content.
export interface CardProps {
    title: string;
    content: string;    
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; content: string }) => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large"; // Optional size prop
  shape?: "rounded-sm" | "rounded-md" | "rounded-full"; // Optional shape prop
  onClick?: () => void; // Optional click handler
}