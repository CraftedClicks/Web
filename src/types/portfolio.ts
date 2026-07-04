export interface Project {
  id: string;
  clientName: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  result: string;
  tags: string[];
  slug: string;
  color: string;
  gradient: string;
  demoUrl?: string;
}
