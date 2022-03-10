import projects from './../../mock/projects.json';

/** @type {import('./[id]').RequestHandler} */
export async function get({ params }) {
  console.log(params);
  console.log(projects);

  // const projects = [
  //   { id: 0, name: 'Framkant Media AB', description: 'Det här jobbet varade i 2.5 år.'},      
  //   { id: 1, name: 'Mawell AB', description: 'Det här jobbet var kanon'},      
  // ]

  if (projects) {
    return {
      body: { projects }
    };
  }
 
  return {
    status: 404
  };
}