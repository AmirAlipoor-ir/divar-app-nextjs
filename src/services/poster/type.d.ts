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
  _id: string;
  amount: number;
  posts: Post[];
}
export interface PostDetailPayload {
  _id: string;
  amount: number;
  post: {
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
  };
}
