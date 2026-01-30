export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Proxy /memory-game/* to CloudFront
    if (url.pathname === '/memory-game' || url.pathname.startsWith('/memory-game/')) {
      // Forward full path - CloudFront serves files under /memory-game/
      let path = url.pathname;
      // Append index.html for directory requests
      if (path === '/memory-game' || path === '/memory-game/') {
        path = '/memory-game/index.html';
      }
      const targetUrl = 'https://d19me0v65pp4hx.cloudfront.net' + path + url.search;

      try {
        const response = await fetch(targetUrl, {
          method: request.method,
          headers: request.headers,
        });

        // Handle SPA routing: If we get 403/404 and it's not an asset request,
        // return index.html so React Router can handle the route
        if ((response.status === 403 || response.status === 404) &&
            !path.includes('.') &&
            !path.startsWith('/memory-game/assets/')) {
          const indexUrl = 'https://d19me0v65pp4hx.cloudfront.net/memory-game/index.html';
          const indexResponse = await fetch(indexUrl);
          return new Response(indexResponse.body, {
            status: 200,
            statusText: 'OK',
            headers: indexResponse.headers,
          });
        }

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
