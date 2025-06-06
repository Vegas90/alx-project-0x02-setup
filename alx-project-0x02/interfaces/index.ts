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