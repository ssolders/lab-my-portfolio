async function get({ params }) {
  console.log(params);
  const projects = [
    { id: 0, name: "Framkant Media AB" },
    { id: 1, name: "Mawell AB" }
  ];
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
