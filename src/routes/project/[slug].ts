import projects from './../../mock/projects.json';

type Project = {
  id: number;
  name: string;
  description: string;
}

/** @type {import('./[id]').RequestHandler} */
export async function get({ params }) {
  const fetchedProjects: Project[] = projects;
  const project: Project = fetchedProjects.find(project => project.name === params.slug);

  if (project) {
    return {
      body: { project }
    };
  }
 
  return {
    status: 404
  };
}