async function handleRequest(request, newurl) {
  return Response.redirect(newurl, code)
}

export default {
  async fetch(request, env, ctx) {
    return handleRequest(request, env.NEWURL)
  },
};

/**
 * Example Input
 * @param {Request} url where to redirect the response
 * @param {number?=301|302} type permanent or temporary redirect
 */
const code = 301 
