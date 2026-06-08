export type Blog = {
  title: string;
  date: string;
  slug: string;
   excerpt: string;
    readTime: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
};