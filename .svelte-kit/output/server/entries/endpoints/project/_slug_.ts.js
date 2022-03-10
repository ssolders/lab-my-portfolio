import { p as projects } from "../../../chunks/projects-2a31d740.js";
async function get({ params }) {
  const fetchedProjects = projects;
  const project = fetchedProjects.find((project2) => project2.name === params.slug);
  if (project) {
    return {
      body: { project }
    };
  }
  return {
    status: 404
  };
}
export { get };
