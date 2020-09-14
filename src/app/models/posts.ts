export interface Post {
  owner: Owner;
  id: string;
  image: string;
  publishDate: string;
  text: string;
  tags: string[];
  link: string;
  likes: number;
}

interface Owner {
  id: string;
  email: string;
  title: string;
  picture: string;
  firstName: string;
  lastName: string;
}