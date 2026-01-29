export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Proxy /memory-game/* to CloudFront
    if (url.pathname === '/memory-game' || url.pathname.startsWith('/memory-game/')) {
      // Forward full path - CloudFront serves files under /memory-game/
      const targetUrl = 'https://d19me0v65pp4hx.cloudfront.net' + url.pathname + url.search;

      try {
        const response = await fetch(targetUrl, {
          method: request.method,
          headers: request.headers,
        });

        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
        });
      } catch (error) {
        return new Response('Error proxying to game server', { status: 502 });
      }
    }

    // For all other routes, serve static files from Pages
    return env.ASSETS.fetch(request);
  },
};
