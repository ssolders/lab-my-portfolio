import user from './../../mock/user.json';

/** @type {import('./[id]').RequestHandler} */
export async function get({ params }) {
  if (user) {
    return {
      body: { user }
    };
  }
 
  return {
    status: 404
  };
}