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

export interface PostProps {
  title: string;
  content: string;
  userId: string;
}

export interface UserProps {  
id: number;
name: string;
username: string;
email: string;
address:{ 
street: string;
suite: string;
city: string;
zipcode: string;
geo: {
  lat: string;
  lng: string; }

}
};