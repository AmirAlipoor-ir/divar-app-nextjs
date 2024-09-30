export interface AddPoster {
  title: string;
  content: string;
  city: string;
  category: string;
  amount: string;
}

export interface Post {
  options: {
    content: ReactNode;
    title: string;
    city: string;
  };
  _id: string;
  title: string;
  content: string;
  images: string[];
  createdAt: string;
  amount: number;
  city: string;
  category: string;
}
export interface PostListPayload {
  posts: Post[];
}
