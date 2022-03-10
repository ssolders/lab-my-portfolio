import { p as projects } from "../../../chunks/projects-2a31d740.js";
async function get({ params }) {
  console.log(params);
  console.log(projects);
  if (projects) {
    return {
      body: { projects }
    };
  }
  return {
    status: 404
  };
}
export { get };
